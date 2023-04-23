import { Grid, Stack, Card, Text } from '@mantine/core';
import React from 'react';
import { SeatType } from '../../models/SeatTypes';
import { formatNumberAsUSD } from '../../util/formatNumberAsUSD';
import { getBackgroundBasedOnSeat } from '../../util/getBackgroundBasedOnSeat';
import arrow from '../../media/arrow.svg';

interface TicketDataItemProps {
    title: string;
    content: string | number;
    span?: number;
}
const TicketDataItem = ({ content, title, span = 1 }: TicketDataItemProps): React.ReactElement => {
    return (
        <Grid.Col span={span}>
            <Stack
                spacing={0}
                align='center'
            >
                <Text size='md'>{title}</Text>
                <Text
                    size='xl'
                    weight='bold'
                >
                    {content}
                </Text>
            </Stack>
        </Grid.Col>
    );
};

export interface TicketSummaryProps {
    departureStation: string;
    arrivalStation: string;
    departureTime: string;
    arrivalTime: string;
    duration: string;
    layover: string | null;
    seat: SeatType;
    cost: number;
    passengerCount: number;
}
/**
 * The ticket summary component used wherever a ticket is represented
 *
 * @param props
 * @param props.departureStation
 * @param props.arrivalStation
 * @param props.departureTime
 * @param props.arrivalTime
 * @param props.duration
 * @param props.layover Time between trains
 * @param props.dwellTime Time waiting on the same train
 * @param props.seat One of the possible seat types
 * @param props.cost Cost of the seat type
 * @param props.passengerCount
 */
export const TicketSummary = ({
    arrivalStation,
    arrivalTime,
    cost,
    departureStation,
    departureTime,
    duration,
    seat,
    passengerCount,
}: TicketSummaryProps): React.ReactElement => {
    return (
        <Card
            withBorder
            style={{ width: '500px' }}
            padding='sm'
            radius='lg'
        >
            <Card.Section
                withBorder
                style={{
                    backgroundColor: getBackgroundBasedOnSeat(seat),
                }}
                inheritPadding
            >
                {/* Need the bottom section to show, so hacky way it is */}
                <span style={{ opacity: 0 }}>t</span>
            </Card.Section>

            <Card.Section
                withBorder
                inheritPadding
            >
                <Grid
                    columns={3}
                    grow
                    align='center'
                >
                    <TicketDataItem
                        title='Class'
                        content={seat}
                    />
                    <TicketDataItem
                        title='Cost'
                        content={formatNumberAsUSD(cost)}
                    />
                    <TicketDataItem
                        title='Passenger Count'
                        content={passengerCount}
                    />
                    <TicketDataItem
                        title='Departure Time'
                        content={departureTime}
                    />
                    {/* Trip Duration, Train Swaps */}
                    <div
                        style={{
                            display: 'grid',
                            justifyItems: 'center',
                        }}
                    >
                        <Text weight='bold'>{duration}</Text>

                        <img
                            src={arrow}
                            alt='black arrow'
                        />
                    </div>
                    <TicketDataItem
                        title='Arrival Time'
                        content={arrivalTime}
                    />
                    <TicketDataItem
                        title='From'
                        content={departureStation}
                    />
                    <TicketDataItem
                        title='To'
                        content={arrivalStation}
                    />
                </Grid>
            </Card.Section>

            <Card.Section
                withBorder
                style={{
                    backgroundColor: getBackgroundBasedOnSeat(seat),
                }}
                inheritPadding
            >
                {/* Need the bottom section to show, so hacky way it is */}
                <span style={{ opacity: 0 }}>t</span>
            </Card.Section>
        </Card>
    );
};
