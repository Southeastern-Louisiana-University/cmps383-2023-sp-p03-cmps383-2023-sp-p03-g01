// A ticket summary component followed by a QR code component that generates a QR code for the ticket based on it's ID

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { COLOR_PALETTE } from '../../styling/ColorPalette';
import { TicketSummary } from './TicketSummary';
import QRCode from 'react-qr-code';
import { ButtonGroup } from 'react-native-elements';
import Barcode from 'react-native-barcode-builder';

export function Ticket({ props }) {

    const [isQR, setIsQR] = React.useState(true);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    function toggleQR() {
        setIsQR(!isQR);
    }

    function onToggle(value) {
        setSelectedIndex(value);
        toggleQR();
    }


    return (
        <View style={styles.ticket}>
            <TicketSummary props={props} />
            <QRCode value={props.arrivalStation} size={200} style={styles.QRCode} />
        </View>
    )
}

const styles = StyleSheet.create({
    //Each ticket is a view with a width of 100% and a height of 40%, a background color of cream, and ticket datapoints aligned horizontally with each other and wrapped in a row
    ticket: {
        width: '90%',
        height: '95%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 10,
        marginVertical: 10,
        padding: 10,
        flexWrap: 'wrap',
    },
    QRCode: {
        background: "white",
        paddingTop: 10,
    },
    buttonGroup: {
        width: '100%',
        height: '5%',
    },
    selectedButtonStyle: {
        backgroundColor: COLOR_PALETTE.light.default.kellyGreen,
    },
});
