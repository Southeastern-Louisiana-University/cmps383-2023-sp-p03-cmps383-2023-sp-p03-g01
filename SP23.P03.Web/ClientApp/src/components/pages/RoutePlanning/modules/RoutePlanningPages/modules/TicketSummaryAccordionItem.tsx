import React from 'react';
import { SeatType } from '../../../../../../models/SeatTypes';
import { Accordion, Card } from '@mantine/core';
import { COLOR_PALETTE } from '../../../../../../styling/ColorPalette';
import { STYLING_VARIABLES } from '../../../../../../styling/StylingVariables';
import { formatNumberAsUSD } from '../../../../../../util/formatNumberAsUSD';

interface TicketSummaryProps {
    departureStation: string;
    arrivalStation: string;
    departureTime: string;
    arrivalTime: string;
    duration: string;
    seat: SeatType;
    cost: number;
}
const TicketSummary = ({
    arrivalStation,
    arrivalTime,
    cost,
    departureStation,
    departureTime,
    duration,
    seat,
}: TicketSummaryProps): React.ReactElement => {
    return (
        <Card
            withBorder
            style={{ width: '500px' }}
            padding='sm'
        >
            <Card.Section
                withBorder
                style={{
                    backgroundColor: COLOR_PALETTE.light.default.kellyGreen,
                    color: COLOR_PALETTE.light.default.textColorPrimary,
                    fontSize: STYLING_VARIABLES.defaultBodyFontSize,
                }}
                inheritPadding
            >
                {departureStation} to {arrivalStation}
            </Card.Section>

            <Card.Section
                withBorder
                style={{ fontSize: STYLING_VARIABLES.defaultBodyFontSize }}
                inheritPadding
            >
                <ul>
                    <li>Departure Time: {departureTime}</li>
                    <li>Duration: {duration}</li>
                    <li>Arrival Time: {arrivalTime}</li>
                </ul>
            </Card.Section>

            <Card.Section
                withBorder
                style={{ fontSize: STYLING_VARIABLES.defaultBodyFontSize }}
                inheritPadding
            >
                <span>
                    1 {seat} Seat {formatNumberAsUSD(cost)}
                </span>
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
            seat: SeatType;
            cost: number;
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
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: '2rem',
                        }}
                    >
                        {data.routes.map((route) => (
                            <TicketSummary
                                key={route.departureStation + route.arrivalStation}
                                departureStation={route.departureStation}
                                arrivalStation={route.arrivalStation}
                                departureTime={route.departureTime}
                                arrivalTime={route.arrivalTime}
                                duration={route.duration}
                                seat={route.seat}
                                cost={route.cost}
                            />
                        ))}
                    </div>
                </Accordion.Panel>
            </Accordion.Item>
        </Accordion>
    );
}
