import { Button, Flex, Paper, Stack, Tabs, Title } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import React, { useEffect, useState } from 'react';
import { getMantineComponentSize } from '../../../util/getMantineComponentSize';
import { DestinationStationSelect } from './modules/DestinationStationSelect';
import { DepartureStationSelect } from './modules/DepartureStationSelect';
import { PassengersNumberInput } from './modules/PassengersNumberInput';
import { TripSelect } from './modules/TripSelect';
import { AppRoutes } from '../../../models/AppRoutes';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
    passengerCountState,
    arrivalStationState,
    departureStationState,
    tripTypeState,
    tripDurationState,
    departureDateState,
    allTrainStationsState,
} from '../../../recoil/atoms/HomePageAtom';
import { TripType } from '../../../models/TripTypes';
import { TripDateRangePicker } from './modules/TripDateRangePicker';
import { STYLING_VARIABLES } from '../../../styling/StylingVariables';
import { COLOR_PALETTE } from '../../../styling/ColorPalette';
import { currentlyLoggedInUserState } from '../../../recoil/atoms/AuthenticationAtom';
import { TicketSummary, TicketSummaryProps } from '../../common/TicketSummary';
import { SeatPrice, SeatType } from '../../../models/SeatTypes';
import { TicketModal } from '../../common/TicketModal';
import API from '../../../util/entrackApi';
import { scheduledRoutesState } from '../../../recoil/atoms/RoutePlanningAtom';
import dayjs from 'dayjs';
import { TrainRouteTicketDto } from '../../../api/EntrackApi.ts/EntrackApi';

interface TabPanelProps {
    children: React.ReactNode;
}
const TabPanel = ({ children }: TabPanelProps): React.ReactElement => {
    return (
        <Paper
            shadow='lg'
            style={{
                width: '1000px',
                minHeight: '310px',

                padding: `${STYLING_VARIABLES.defaultSpacing}`,

                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: `${STYLING_VARIABLES.defaultSpacing}`,

                borderLeft: '1px solid',
                borderRight: '1px solid',
                borderBottom: '1px solid',
                borderColor: COLOR_PALETTE.light.default.borderColor,
            }}
            radius='xs'
        >
            {children}
        </Paper>
    );
};

/**
 * The home page of the app.
 */
export function HomePage(): React.ReactElement {
    const navigate = useNavigate();
    const { width: browserWidth } = useViewportSize();
    const componentSize = getMantineComponentSize(browserWidth);

    const tripType = useRecoilValue(tripTypeState);
    const passengerCount = useRecoilValue(passengerCountState);
    const departureStation = useRecoilValue(departureStationState);
    const arrivalStation = useRecoilValue(arrivalStationState);
    const tripDuration = useRecoilValue(tripDurationState);
    const departureDate = useRecoilValue(departureDateState);
    const currentlyLoggedInUser = useRecoilValue(currentlyLoggedInUserState);
    const [allTrainStations, setAllTrainStations] = useRecoilState(allTrainStationsState);
    const setScheduledRoutes = useSetRecoilState(scheduledRoutesState);

    const [modalOpened, setModalOpened] = useState(false);
    const [upcomingTrip, setUpcomingTrip] = useState<{ date: string; ticket: TicketSummaryProps } | null>(null);

    const formIsComplete =
        passengerCount > 0 &&
        departureStation !== '' &&
        arrivalStation !== '' &&
        ((tripType === TripType.ONE_WAY && departureDate !== null) ||
            (tripType === TripType.ROUND_TRIP && tripDuration[0] !== null && tripDuration[1] !== null));

    const navigateToRoutePlanningPage = () => {
        navigate(AppRoutes.ROUTE_PLANNING);

        API.api
            .scheduledRoutesList()
            .then((response) => {
                setScheduledRoutes(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        if (allTrainStations.length === 0) {
            API.api
                .stationsList()
                .then((response) => {
                    setAllTrainStations(
                        response.data.map((station) => {
                            return {
                                id: station.id,
                                label: `${station.city}, ${station.state}`,
                                value: `${station.city}, ${station.state}`,
                            };
                        })
                    );
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (currentlyLoggedInUser === null) {
            return;
        }

        API.api.authenticationMeList().then((response) => {
            if (response.data.tickets === undefined || response.data.tickets === null) return;

            // First, filter out only the tickets that are coach tickets
            const coachOnlyTickets = response.data.tickets.filter((ticket) => ticket.seatType === SeatType.COACH);

            // Then, group the tickets by the date of the trip
            const ticketsByDate: { [key: string]: TrainRouteTicketDto[] } = coachOnlyTickets.reduce((acc, ticket) => {
                const date = dayjs(ticket.trainRoute!.departureTime).format('MMM D, YYYY');

                if (acc[date] === undefined) {
                    acc[date] = [ticket];
                } else {
                    acc[date]!.push(ticket);
                }

                return acc;
            }, {} as { [key: string]: TrainRouteTicketDto[] });

            // Then, sort the tickets for each date by the departure time
            Object.keys(ticketsByDate).forEach((date) => {
                ticketsByDate[date]!.sort((a, b) => {
                    return dayjs(a.trainRoute!.departureTime).unix() - dayjs(b.trainRoute!.departureTime).unix();
                });
            });

            // Finally, convert the tickets to the format that the TicketSummary component expects
            const ticketsToDisplay: { [key: string]: TicketSummaryProps } = {};
            Object.keys(ticketsByDate).forEach((date) => {
                const lastTicketForDate = ticketsByDate[date]![ticketsByDate[date]!.length - 1]!;
                const firstTicketForDate = ticketsByDate[date]![0]!;

                const trainSwaps = ticketsByDate[date]!.reduce((acc, curr) => {
                    if (curr.trainRoute?.layover) {
                        acc += 1;
                    }

                    return acc;
                }, 0);

                const arrivalTime = dayjs(lastTicketForDate.trainRoute!.arrivalTime);
                const arrivalTimeFormatted = arrivalTime.format('h:mm A');
                const departureTime = dayjs(firstTicketForDate.trainRoute!.departureTime);
                const departureTimeFormatted = departureTime.format('h:mm A');

                // Calculate total travel time
                const totalTravelTime = arrivalTime.diff(departureTime, 'minute');
                const hours = Math.floor(totalTravelTime / 60);
                const minutes = totalTravelTime % 60;
                const tripDuration = `${hours}hr ${minutes}min`;

                ticketsToDisplay[date] = {
                    arrivalStation: lastTicketForDate.trainRoute!.arrivalStation,
                    arrivalTime: arrivalTimeFormatted,
                    cost:
                        SeatPrice.COACH * trainSwaps + firstTicketForDate.trainRoute!.passengerCount * SeatPrice.COACH,
                    departureStation: ticketsByDate[date]![0]!.trainRoute!.departureStation,
                    departureTime: departureTimeFormatted,
                    seat: firstTicketForDate.seatType as SeatType,
                    duration: tripDuration,
                    layover: null,
                    passengerCount: firstTicketForDate.trainRoute!.passengerCount,
                    code: firstTicketForDate.code,
                };
            });

            setUpcomingTrip({
                date: Object.keys(ticketsToDisplay)[0]!,
                ticket: ticketsToDisplay[Object.keys(ticketsToDisplay)[0]!]!,
            });
        });
    }, [currentlyLoggedInUser]);

    return (
        <div
            style={{
                width: '100%',

                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: STYLING_VARIABLES.maxContentWidth,
                    height: '100%',

                    padding: STYLING_VARIABLES.defaultRootContentPadding,

                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Tabs
                    defaultValue='book'
                    variant='outline'
                    radius='sm'
                >
                    <Tabs.List>
                        <Tabs.Tab value='book'>Book a Trip</Tabs.Tab>
                        <Tabs.Tab value='upcomingTrip'>Upcoming Trip</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value='book'>
                        <TabPanel>
                            {/* Top Row */}
                            <TripSelect />
                            <TripDateRangePicker />

                            {/* 2nd Row */}
                            <DepartureStationSelect />
                            <DestinationStationSelect />

                            {/* 3rd Row */}
                            <PassengersNumberInput />

                            {/* Final Row */}
                            {formIsComplete && (
                                <Button
                                    style={{ width: '80%' }}
                                    size={componentSize}
                                    onClick={navigateToRoutePlanningPage}
                                >
                                    Find A Route
                                </Button>
                            )}
                        </TabPanel>
                    </Tabs.Panel>

                    <Tabs.Panel value='upcomingTrip'>
                        <TabPanel>
                            <Stack
                                justify='center'
                                align='center'
                            >
                                {currentlyLoggedInUser === null ? (
                                    <>
                                        <Title>Sign in to see upcoming trips</Title>
                                    </>
                                ) : upcomingTrip === null ? (
                                    <Title>No upcoming trips</Title>
                                ) : (
                                    <>
                                        {/* TODO: Grab most recent ticket and put here */}
                                        <Title order={3}>Upcoming Trip on {upcomingTrip.date}</Title>

                                        <TicketSummary {...upcomingTrip.ticket} />

                                        <Flex gap='1rem'>
                                            <Button
                                                size={componentSize}
                                                onClick={() => {
                                                    setModalOpened(true);
                                                }}
                                            >
                                                View Ticket
                                            </Button>

                                            <Button
                                                size={componentSize}
                                                onClick={() => {
                                                    navigate(AppRoutes.VIEW_TICKETS);
                                                }}
                                            >
                                                View All Tickets
                                            </Button>
                                        </Flex>

                                        <TicketModal
                                            ticket={upcomingTrip.ticket}
                                            opened={modalOpened}
                                            onClose={() => {
                                                setModalOpened(false);
                                            }}
                                        />
                                    </>
                                )}
                            </Stack>
                        </TabPanel>
                    </Tabs.Panel>
                </Tabs>
            </div>
        </div>
    );
}
