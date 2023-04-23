import React, { useEffect } from 'react';
import { Button, Flex, Stack, Text, Title } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { getMantineComponentSize } from '../../../util/getMantineComponentSize';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../models/AppRoutes';
import { useRecoilValue } from 'recoil';
import { currentlyLoggedInUserState } from '../../../recoil/atoms/AuthenticationAtom';
import API from '../../../util/entrackApi';
import { AxiosResponse } from 'axios';
import { TrainRouteTicketDto } from '../../../api/EntrackApi.ts/EntrackApi';

/**
 * The page shown when a user successfully purchases a ticket.
 */
export function TicketSuccessPage(): React.ReactElement {
    const navigate = useNavigate();
    const { width: browserWidth } = useViewportSize();
    const componentSize = getMantineComponentSize(browserWidth);

    const currentlyLoggedInUser = useRecoilValue(currentlyLoggedInUserState);

    useEffect(() => {
        if (currentlyLoggedInUser === null) return;

        const ticketIdsRaw = localStorage.getItem('ticketIds');
        const ticketIds = JSON.parse(ticketIdsRaw ?? '[]') as number[];

        const promises: AxiosResponse<TrainRouteTicketDto, any>[] = [];
        ticketIds.forEach(async (ticketId) => {
            const promise = await API.api.ticketsUpdate2(ticketId, currentlyLoggedInUser?.id);
            promises.push(promise);
        });

        Promise.all(promises).then(() => {
            console.log('Tickets updated');

            localStorage.removeItem('ticketIds');
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentlyLoggedInUser]);

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
                    View Tickets
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
