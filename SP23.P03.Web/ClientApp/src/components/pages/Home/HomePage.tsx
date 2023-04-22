import { Button, Flex, Paper, Stack, Tabs, Title } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import React, { useState } from 'react';
import { getMantineComponentSize } from '../../../util/getMantineComponentSize';
import { DestinationStationSelect } from './modules/DestinationStationSelect';
import { DepartureStationSelect } from './modules/DepartureStationSelect';
import { PassengersNumberInput } from './modules/PassengersNumberInput';
import { TripSelect } from './modules/TripSelect';
import { AppRoutes } from '../../../models/AppRoutes';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import {
    passengerCountState,
    arrivalStationState,
    departureStationState,
    tripTypeState,
    tripDurationState,
    departureDateState,
} from '../../../recoil/atoms/HomePageAtom';
import { TripType } from '../../../models/TripTypes';
import { TripDateRangePicker } from './modules/TripDateRangePicker';
import { STYLING_VARIABLES } from '../../../styling/StylingVariables';
import { COLOR_PALETTE } from '../../../styling/ColorPalette';
import { currentlyLoggedInUserState } from '../../../recoil/atoms/AuthenticationAtom';
import { TicketSummary } from '../../common/TicketSummary';
import { SeatType } from '../../../models/SeatTypes';
import { TicketModal } from '../../common/TicketModal';

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

    const [modalOpened, setModalOpened] = useState(false);

    const formIsComplete =
        passengerCount > 0 &&
        departureStation !== '' &&
        arrivalStation !== '' &&
        ((tripType === TripType.ONE_WAY && departureDate !== null) ||
            (tripType === TripType.ROUND_TRIP && tripDuration[0] !== null && tripDuration[1] !== null));

    const navigateToRoutePlanningPage = () => {
        navigate(AppRoutes.ROUTE_PLANNING);
    };

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
                                ) : (
                                    <>
                                        {/* TODO: Grab most recent ticket and put here */}
                                        <Title order={3}>Upcoming Trip on May 8, 2023</Title>

                                        <TicketSummary
                                            departureStation={'Bob'}
                                            arrivalStation={'Bob'}
                                            departureTime={'Bobpm'}
                                            arrivalTime={'Bobpm'}
                                            duration={'Bobmin'}
                                            layover={'15min'}
                                            dwellTime={null}
                                            seat={SeatType.COACH}
                                            cost={100}
                                            passengerCount={10}
                                        />

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
                                            ticket={{
                                                departureStation: 'Bob',
                                                arrivalStation: 'Bob',
                                                departureTime: 'Bobpm',
                                                arrivalTime: 'Bobpm',
                                                duration: 'Bobmin',
                                                layover: '15min',
                                                dwellTime: null,
                                                seat: SeatType.COACH,
                                                cost: 100,
                                                passengerCount: 10,
                                            }}
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
