// A tool for logging in the user made with react native elements

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { COLOR_PALETTE } from '../styling/ColorPalette';

export function LoginBox() {
    return(
        <View style={styles.loginbox}>
            <Input
                placeholder='Username'
            />
            <Input
                placeholder='Password'
                
            />

            <Button
                title="Sign In"
                //titleStyle={styles.title}
                type="solid"
                buttonStyle={styles.button}
                onPress={() => {alert('Login')}}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    loginbox: {
        justifyContent: 'center',
        //alignItems: 'center',
        height: '100%',
    },
    card: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        color: COLOR_PALETTE.light.default.cream,
        marginRight: 10,

    },
    button: {
        width: '100%',
        backgroundColor: COLOR_PALETTE.light.default.kellyGreen,
    },  
});