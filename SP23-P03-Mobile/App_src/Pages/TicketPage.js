// A page for displaying the user's tickets
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLOR_PALETTE } from '../styling/ColorPalette';
import { TicketSummary } from '../Compenents/Tickets/TicketSummary';
import { Button, Overlay } from 'react-native-elements';
import { Ticket } from '../Compenents/Tickets/Ticket';
import { TicketPageEntry } from '../Compenents/Tickets/TicketPageEntry';

export default function TicketScreen({ navigation }) {
    return (
        <View style={styles.ticketpage}>
            <Text>Ticket Page</Text>
            <TicketPageEntry props={TEST_DATA} />
        </View>
    )
}

const styles = StyleSheet.create({
    ticketpage: {
        display: 'flex',
        flexDirection: 'column',
        color: COLOR_PALETTE.light.default.textColorPrimary,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
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
    }
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