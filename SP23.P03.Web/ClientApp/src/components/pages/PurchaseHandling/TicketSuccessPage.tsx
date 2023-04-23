import React from 'react';
import { Button, Flex, Stack, Text, Title } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { getMantineComponentSize } from '../../../util/getMantineComponentSize';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../models/AppRoutes';

/**
 * The page shown when a user successfully purchases a ticket.
 */
export function TicketSuccessPage(): React.ReactElement {
    const navigate = useNavigate();
    const { width: browserWidth } = useViewportSize();
    const componentSize = getMantineComponentSize(browserWidth);

    return (
        <Flex
            align='center'
            justify='center'
            direction='column'
            style={{ height: '100%' }}
        >
            <Title>Thank you for your purchase!</Title>
            <Text size='lg'>Order Confirmation Number: #5484SET245F</Text>

            <Stack
                style={{
                    marginTop: '2rem',
                }}
            >
                <Button
                    size={componentSize}
                    onClick={() => {
                        navigate(AppRoutes.VIEW_TICKETS);
                    }}
                >
                    View Ticket
                </Button>
                <Button
                    size={componentSize}
                    onClick={() => {
                        navigate(AppRoutes.HOME);
                    }}
                >
                    Home
                </Button>
            </Stack>
        </Flex>
    );
}
