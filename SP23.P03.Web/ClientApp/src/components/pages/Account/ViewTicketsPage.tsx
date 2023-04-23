import { Button, Flex, Stack, Title } from '@mantine/core';
import React, { useState } from 'react';
import { SeatType } from '../../../models/SeatTypes';
import { TicketSummaryProps, TicketSummary } from '../../common/TicketSummary';
import { TicketModal } from '../../common/TicketModal';
import { useViewportSize } from '@mantine/hooks';
import { getMantineComponentSize } from '../../../util/getMantineComponentSize';

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
    const TEST_DATA: TicketSummaryProps = {
        departureStation: 'Hammond, LA',
        arrivalStation: 'Baton Rouge, LA',
        departureTime: '12:01pm',
        arrivalTime: '2:15pm',
        duration: '2hr 14min',
        layover: null,
        seat: SeatType.COACH,
        cost: 152,
        passengerCount: 1,
    };

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
                    <TicketContainer ticket={TEST_DATA} />
                </Flex>
            </Stack>

            <Stack style={{ width: '100%' }}>
                <Title order={2}>May 14, 2023</Title>
                <Flex
                    wrap='wrap'
                    gap='2rem'
                >
                    <TicketContainer ticket={TEST_DATA} />
                </Flex>
            </Stack>
        </div>
    );
}
