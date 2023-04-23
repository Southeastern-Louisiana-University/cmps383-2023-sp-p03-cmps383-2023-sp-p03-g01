import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { COLOR_PALETTE } from "../../styling/ColorPalette";
import { TicketSummary } from "./TicketSummary";
import { Button, Overlay } from "react-native-elements";
import { Ticket } from "./Ticket";

export function TicketPageEntry({ props }) {

    const [visible, setVisible] = React.useState(false);

    const toggleVisible = () => {
        setVisible(!visible);
    };

    return (
        <View style={styles.ticketPageEntry}>
            <TicketSummary props={TEST_DATA} />
            <Button buttonStyle={styles.Button}
                title="View Ticket"
                titleStyle={styles.title}
                onPress={() => { toggleVisible() }} />
            <Overlay isVisible={visible} onBackdropPress={toggleVisible}>
                <Ticket props={TEST_DATA} />
            </Overlay>
        </View>
    );
}

const styles = StyleSheet.create({
    ticketPageEntry: {
        width: '100%',
        height: '70%',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    // Make sure the button sits in the center of the page and it's title in the center of the button
    Button: {
        width: '70%',
        backgroundColor: COLOR_PALETTE.light.default.kellyGreen,

    },
    // Make sure the text sits in the center of the button
    title: {
        fontSize: 20,
        color: COLOR_PALETTE.light.default.cream,
        marginRight: 10,
        // alignContent: 'center',
        // justifyContent: 'center',
        // textAlign: 'center',
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