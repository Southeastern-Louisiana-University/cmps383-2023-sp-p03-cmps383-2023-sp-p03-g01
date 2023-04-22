import React from 'react';
import { SeatType } from '../../../../../../models/SeatTypes';
import { Accordion, Card, Flex, Grid, Stack, Text } from '@mantine/core';
import { COLOR_PALETTE } from '../../../../../../styling/ColorPalette';
import { formatNumberAsUSD } from '../../../../../../util/formatNumberAsUSD';
import { BlackArrow } from '../../../../../../media/BlackArrow';
import { BsHourglassSplit } from 'react-icons/bs';
import { BiRun } from 'react-icons/bi';

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

interface TicketSummaryProps {
    departureStation: string;
    arrivalStation: string;
    departureTime: string;
    arrivalTime: string;
    duration: string;
    layover: string | null;
    dwellTime: string | null;
    seat: SeatType;
    cost: number;
    passengerCount: number;
}
const TicketSummary = ({
    arrivalStation,
    arrivalTime,
    cost,
    departureStation,
    departureTime,
    duration,
    seat,
    passengerCount,
    dwellTime,
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
                    backgroundColor: COLOR_PALETTE.light.default.kellyGreen,
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

                        <BlackArrow />

                        {dwellTime && (
                            <Grid>
                                <Flex align='center'>
                                    <Text weight='bold'>{dwellTime}</Text>
                                    <BsHourglassSplit />
                                </Flex>
                            </Grid>
                        )}
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
                    backgroundColor: COLOR_PALETTE.light.default.kellyGreen,
                }}
                inheritPadding
            >
                {/* Need the bottom section to show, so hacky way it is */}
                <span style={{ opacity: 0 }}>t</span>
            </Card.Section>
        </Card>
    );
};

interface TicketSummaryAccordionItemProps {
    data: {
        departureStation: string;
        arrivalStation: string;
        routes: {
            departureStation: string;
            arrivalStation: string;
            departureTime: string;
            arrivalTime: string;
            duration: string;
            layover: string | null;
            dwellTime: string | null;
            seat: SeatType;
            cost: number;
            passengerCount: number;
        }[];
    };
}
/**
 * The Accordion that displays all tickets on a route.
 *
 * @param props
 * @param props.data Data to display
 */
export function TicketSummaryAccordionItem({ data }: TicketSummaryAccordionItemProps): React.ReactElement {
    return (
        <Accordion defaultValue='Departure Route'>
            <Accordion.Item value='Departure Route'>
                <Accordion.Control>
                    {data.departureStation} to {data.arrivalStation}
                </Accordion.Control>

                <Accordion.Panel>
                    <Flex
                        justify='center'
                        wrap='wrap'
                        gap='2rem'
                    >
                        {data.routes.map((route, index) => (
                            <Flex
                                key={route.departureStation + route.arrivalStation}
                                align='center'
                                gap='2rem'
                            >
                                <TicketSummary
                                    key={route.departureStation + route.arrivalStation}
                                    {...route}
                                />

                                {index !== data.routes.length - 1 && (
                                    <Grid>
                                        <Flex align='center'>
                                            <Text weight='bold'>{route.layover}</Text>
                                            <BiRun />
                                        </Flex>
                                        <BlackArrow />
                                    </Grid>
                                )}
                            </Flex>
                        ))}
                    </Flex>
                </Accordion.Panel>
            </Accordion.Item>
        </Accordion>
    );
}
