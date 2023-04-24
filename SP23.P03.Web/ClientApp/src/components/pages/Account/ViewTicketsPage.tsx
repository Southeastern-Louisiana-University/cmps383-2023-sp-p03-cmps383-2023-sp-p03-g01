import { Button, Flex, Stack, Title } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { SeatPrice, SeatType } from '../../../models/SeatTypes';
import { TicketSummaryProps, TicketSummary } from '../../common/TicketSummary';
import { TicketModal } from '../../common/TicketModal';
import { useViewportSize } from '@mantine/hooks';
import { getMantineComponentSize } from '../../../util/getMantineComponentSize';
import API from '../../../util/entrackApi';
import { TrainRouteTicketDto } from '../../../api/EntrackApi.ts/EntrackApi';
import dayjs from 'dayjs';

interface TicketContainerProps {
    ticket: TicketSummaryProps;
}
const TicketContainer = ({ ticket }: TicketContainerProps): React.ReactElement => {
    const { width: browserWidth } = useViewportSize();
    const componentSize = getMantineComponentSize(browserWidth);

    const [modalOpened, setModalOpened] = useState(false);

    console.log('ticket', ticket);

    return (
        <Stack align='center'>
            <TicketSummary {...ticket} />
            <Button
                size={componentSize}
                onClick={() => {
                    setModalOpened(true);
                }}
            >
                View Ticket
            </Button>

            <TicketModal
                ticket={ticket}
                opened={modalOpened}
                onClose={() => {
                    setModalOpened(false);
                }}
            />
        </Stack>
    );
};

/**
 * Displays the tickets that the user has purchased.
 */
export function ViewTicketsPage(): React.ReactElement {
    const [ticketsToDisplay, setTicketsToDisplay] = useState<{ [key: string]: TicketSummaryProps }>({});

    useEffect(() => {
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

            setTicketsToDisplay(ticketsToDisplay);
        });
    }, []);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '2rem',
                gap: '2rem',
            }}
        >
            <Title>Upcoming Trips</Title>

            {Object.keys(ticketsToDisplay).map((date) => {
                return (
                    <Stack
                        style={{ width: '100%' }}
                        align='center'
                        key={date}
                    >
                        <Title order={2}>{date}</Title>
                        <Flex
                            wrap='wrap'
                            gap='2rem'
                        >
                            <TicketContainer ticket={ticketsToDisplay[date]!} />
                        </Flex>
                    </Stack>
                );
            })}
        </div>
    );
}
