import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { COLOR_PALETTE } from '../../styling/ColorPalette';
import { FONTS } from '../../styling/Fonts';

export function Title() {
    return(
        <View style={styles.title}>
            <Image
                    source={require('../../../assets/icon.png')}
                    style={{ width: 30, height: 30 }}
            />
            <Text style={{fontSize: 20}}>EnTrack</Text>  
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        display: 'flex',
        flexDirection: 'row',
        color: COLOR_PALETTE.light.default.textColorPrimary,
        //fontFamily: FONTS.fontFamily,
    },
});