import React from 'react';
import { SeatType } from '../../../../../../models/SeatTypes';
import { Accordion, Flex, Grid, Text } from '@mantine/core';
import { BlackArrow } from '../../../../../../media/BlackArrow';
import { BiRun } from 'react-icons/bi';
import { TicketSummary } from '../../../../../common/TicketSummary';

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
