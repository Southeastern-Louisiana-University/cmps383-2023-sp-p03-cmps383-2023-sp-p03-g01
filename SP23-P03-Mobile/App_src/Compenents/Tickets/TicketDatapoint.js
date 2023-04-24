//A basic react native component that consists of two text fields on top of each other
//and an image on the left side of the text fields
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { COLOR_PALETTE } from '../../styling/ColorPalette';

export function TicketDatapoint({ props }) {
    return (
        <View style={styles.ticketdatapoint}>
            <View style={styles.text}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.data}>{props.data}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ticketdatapoint: {
        width: '33%',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 10,
        padding: 10,
    },
    text: {
        fontSize: 15,
        color: COLOR_PALETTE.light.default.textColorPrimary,
    },
    title: {
        fontSize: 15,
        color: COLOR_PALETTE.light.default.textColorPrimary,
        fontWeight: 'bold',
    },
    data: {
        fontSize: 15,
        color: COLOR_PALETTE.light.default.textColorPrimary,
    },
});