// A page for displaying the user's tickets
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { COLOR_PALETTE } from '../styling/ColorPalette';
import { TicketSummary } from '../Compenents/Tickets/TicketSummary';
import { Button, Overlay } from 'react-native-elements';
import { Ticket } from '../Compenents/Tickets/Ticket';
import { TicketPageEntry } from '../Compenents/Tickets/TicketPageEntry';
import { HeaderApp } from '../Compenents/Header/Header';
import { useEffect } from 'react';
import axios from 'axios';
import { BaseUrl } from '../../configuration';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';

export default function TicketScreen({ navigation }) {

    const [tickets, setTickets] = React.useState([]);

    useEffect(() => {
        axios.get(`${BaseUrl}/api/authentication/me`).then((response) => {
            console.log(response.data);
            if (response.data.tickets === undefined || response.data.tickets === null) return;

            // First, filter out only the tickets that are coach tickets
            const coachOnlyTickets = response.data.tickets.filter((ticket) => ticket.seatType === "Coach");

            // Then, group the tickets by the date of the trip
            const ticketsByDate = coachOnlyTickets.reduce((acc, ticket) => {
                const date = dayjs(ticket.trainRoute.departureTime).format('MMM D, YYYY');

                if (acc[date] === undefined) {
                    acc[date] = [ticket];
                } else {
                    acc[date].push(ticket);
                }

                return acc;
            }, {});

            // Then, sort the tickets for each date by the departure time
            Object.keys(ticketsByDate).forEach((date) => {
                ticketsByDate[date].sort((a, b) => {
                    return dayjs(a.trainRoute.departureTime).unix() - dayjs(b.trainRoute.departureTime).unix();
                });
            });

            // Finally, convert the tickets to the format that the TicketSummary component expects
            const ticketsToDisplay = {};
            Object.keys(ticketsByDate).forEach((date) => {
                const lastTicketForDate = ticketsByDate[date][ticketsByDate[date].length - 1];
                const firstTicketForDate = ticketsByDate[date][0];

                const trainSwaps = ticketsByDate[date].reduce((acc, curr) => {
                    if (curr.trainRoute?.layover) {
                        acc += 1;
                    }

                    return acc;
                }, 0);

                const arrivalTime = dayjs(lastTicketForDate.trainRoute.arrivalTime);
                const arrivalTimeFormatted = arrivalTime.format('h:mm A');
                const departureTime = dayjs(firstTicketForDate.trainRoute.departureTime);
                const departureTimeFormatted = departureTime.format('h:mm A');

                // Calculate total travel time
                const totalTravelTime = arrivalTime.diff(departureTime, 'minute');
                const hours = Math.floor(totalTravelTime / 60);
                const minutes = totalTravelTime % 60;
                const tripDuration = `${hours}hr ${minutes}min`;

                ticketsToDisplay[date] = {
                    arrivalStation: lastTicketForDate.trainRoute.arrivalStation,
                    arrivalTime: arrivalTimeFormatted,
                    cost:
                        52 * trainSwaps + firstTicketForDate.trainRoute.passengerCount * 52,
                    departureStation: ticketsByDate[date][0].trainRoute.departureStation,
                    departureTime: departureTimeFormatted,
                    seat: firstTicketForDate.seatType,
                    duration: tripDuration,
                    layover: null,
                    passengerCount: firstTicketForDate.trainRoute.passengerCount,
                    code: firstTicketForDate.code,
                };
            });

            console.log(Object.keys(ticketsToDisplay));
            setTickets(ticketsToDisplay);
        });
    }, []);

    //A function that maps each element in an array to a TicketPageEntry component
    const mapTicketsToTicketPageEntry = () => {
        return Object.keys(tickets).map((ticketID) => {
            return <TicketPageEntry key={tickets[ticketID].id} props={tickets[ticketID]} />;
        });
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View>
                    <HeaderApp navigation={navigation} />

                    <View style={styles.ticketpage}>
                        {mapTicketsToTicketPageEntry()}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}



const styles = StyleSheet.create({
    ticketpage: {
        display: 'flex',
        flexDirection: 'column',
        color: COLOR_PALETTE.light.default.textColorPrimary,
        //justifyContent: 'center',
        alignItems: 'center',
        height: '80%',
        textAlign: 'center',
    },
    // Make sure the button sits in the center of the page and it's title in the center of the button
    Button: {
        width: '70%',
        backgroundColor: COLOR_PALETTE.light.default.kellyGreen,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    // Make sure the text sits in the center of the button
    title: {
        fontSize: 20,
        color: COLOR_PALETTE.light.default.cream,
        marginRight: 10,
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    purple: {
        backgroundColor: "purple",
        height: 100,
        marginBottom: 10,
    },
});

const TEST_DATA = {
    departureStation: 'Hammond, LA',
    arrivalStation: 'Baton Rouge, LA',
    departureTime: '12:01pm',
    arrivalTime: '2:15pm',
    duration: '2hr 14min',
    layover: null,
    dwellTime: '15min',
    seat: "Coach",
    cost: 152,
    passengerCount: 1,
};