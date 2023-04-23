import { Button, Flex, Stack, Title } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { SeatType } from '../../../models/SeatTypes';
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
    const [ticketsToDisplay, setTicketsToDisplay] = useState<TicketSummaryProps[]>([]);

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

            console.log(ticketsByDate);
        });
    }, []);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '2rem',
                gap: '2rem',
            }}
        >
            <Title>Upcoming Trips</Title>

            <Stack style={{ width: '100%' }}>
                <Title order={2}>May 8, 2023</Title>
                <Flex
                    wrap='wrap'
                    gap='2rem'
                >
                    {/* <TicketContainer ticket={} /> */}
                </Flex>
            </Stack>

            <Stack style={{ width: '100%' }}>
                <Title order={2}>May 14, 2023</Title>
                <Flex
                    wrap='wrap'
                    gap='2rem'
                >
                    {/* <TicketContainer ticket={TEST_DATA} /> */}
                </Flex>
            </Stack>
        </div>
    );
}
