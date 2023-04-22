import React from 'react';
import { SeatType } from '../../../../../models/SeatTypes';
import { TicketSummaryAccordionItem } from './modules/TicketSummaryAccordionItem';

const FAKE_DATA = [
    // Departure Route
    {
        departureStation: 'Baton Rouge, LA',
        arrivalStation: 'New Orleans, LA',
        routes: [
            {
                departureStation: 'Baton Rouge, LA',
                arrivalStation: 'Schriever, LA',
                departureTime: '9:00 AM CDT',
                arrivalTime: '10:51 AM CDT',
                duration: '1hr 51min',
                layover: '15min',
                dwellTime: null,
                seat: SeatType.COACH,
                cost: 52,
                passengerCount: 3,
            },
            {
                departureStation: 'Schriever, LA',
                arrivalStation: 'Lafayette, LA',
                departureTime: '11:21 AM CDT',
                arrivalTime: '2:12 PM CDT',
                duration: '2hr 51min',
                layover: '15min',
                dwellTime: null,
                seat: SeatType.FIRST_CLASS,
                cost: 52,
                passengerCount: 3,
            },
            {
                departureStation: 'Lafayette, LA',
                arrivalStation: 'New Orleans, LA',
                departureTime: '2:42 PM CDT',
                arrivalTime: '4:33 PM CDT',
                duration: '1hr 51min',
                layover: null,
                dwellTime: '30min',
                seat: SeatType.SLEEPER,
                cost: 52,
                passengerCount: 3,
            },
        ],
    },
    // Return Route
    {
        departureStation: 'New Orleans, LA',
        arrivalStation: 'Baton Rouge, LA',
        routes: [
            {
                departureStation: 'Baton Rouge, LA',
                arrivalStation: 'Schriever, LA',
                departureTime: '9:00 AM CDT',
                arrivalTime: '10:51 AM CDT',
                duration: '1hr 51min',
                layover: '15min',
                dwellTime: null,
                seat: SeatType.COACH,
                cost: 52,
                passengerCount: 3,
            },
            {
                departureStation: 'Schriever, LA',
                arrivalStation: 'Lafayette, LA',
                departureTime: '11:21 AM CDT',
                arrivalTime: '2:12 PM CDT',
                duration: '2hr 51min',
                layover: '15min',
                dwellTime: null,
                seat: SeatType.COACH,
                cost: 52,
                passengerCount: 3,
            },
            {
                departureStation: 'Lafayette, LA',
                arrivalStation: 'New Orleans, LA',
                departureTime: '2:42 PM CDT',
                arrivalTime: '4:33 PM CDT',
                duration: '1hr 51min',
                layover: null,
                dwellTime: null,
                seat: SeatType.COACH,
                cost: 52,
                passengerCount: 3,
            },
        ],
    },
];

/**
 * The final screen in the route planning process.
 */
export function ReviewAndPayPage(): React.ReactElement {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {FAKE_DATA.map((data) => (
                <TicketSummaryAccordionItem data={data} />
            ))}
        </div>
    );
}
