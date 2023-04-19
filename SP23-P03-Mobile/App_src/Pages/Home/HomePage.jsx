import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button } from '@rneui/base';
import { HeaderApp } from '../../Header';

export function HomePage() {
  return (
    <View /*style={styles.HomePage}*/>
        
        <HeaderApp/>
        
    </View>
  );
}

const styles = StyleSheet.create({
    HomePage: {
        borderWidth: 0,
        borderColor: 'grey',
        width: '100%',
        height: '100%',
    },
    ButtonStyle: {
        //The styling for horizontally aligned buttons
        width: '100%',
        height: '50%',
        borderWidth: 3,
        backgroundColor: 'green',
        borderColor: 'red',
        margin: 5,
    },
    ButtonContainer: {
        //The styling for the container of the buttons
        width: '80%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',

    },
    textContainer: {
        width: '100%',
        height: '30%',
        display: 'flex',
        flexDirection: 'column',
        borderColor: 'purple',
        borderWidth: 3,
    },
});