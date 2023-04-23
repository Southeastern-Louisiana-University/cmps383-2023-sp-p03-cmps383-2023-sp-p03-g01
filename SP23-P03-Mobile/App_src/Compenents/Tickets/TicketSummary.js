//A react native ticket summary component
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLOR_PALETTE } from '../../styling/ColorPalette';
import { TicketDatapoint } from './TicketDatapoint';

export function TicketSummary({ props }) {
    return (
        <View style={styles.ticket}>
            <TicketDatapoint props={{ title: 'Class', data: props.seat }} />
            <TicketDatapoint props={{ title: 'Cost', data: "$" + props.cost }} />
            <TicketDatapoint props={{ title: 'Passenger Count', data: props.passengerCount }} />
            <TicketDatapoint props={{ title: 'Departure Time', data: props.departureTime }} />
            <TicketDatapoint props={{ title: 'Arrival Time', data: props.arrivalTime }} />
            <TicketDatapoint props={{ title: 'Departure Station', data: props.departureStation }} />
            <TicketDatapoint props={{ title: 'Arrival Station', data: props.arrivalStation }} />
        </View>
    )
}

const styles = StyleSheet.create({
    //Each ticket is a view with a width of 100% and a height of 40%, a background color of cream, and ticket datapoints aligned horizontally with each other and wrapped in a row
    ticket: {
        width: '100%',
        height: '60%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 10,
        padding: 10,
        flexWrap: 'wrap',
        shadowColor: COLOR_PALETTE.light.default.kellyGreen,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.75,
        shadowRadius: 1.84,
        elevation: 5,
    },
});