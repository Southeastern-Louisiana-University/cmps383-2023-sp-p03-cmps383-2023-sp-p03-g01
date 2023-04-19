import React from "react";
import {  StyleSheet,Text, View, Image } from 'react-native';
import { COLOR_PALETTE } from "./styling/ColorPalette";
import { Header, Icon } from '@rneui/themed';
import { Title } from './Title';


export function HeaderApp() {
    return (
        <View>
            <Header containerStyle={styles.headerbox}
            centerComponent={ <Title/> }
            leftComponent={styles.leftComponent}
            placement="center"
            al
            />
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    headerbox: {
        width: '100%',
        backgroundColor: 'white',
        bottomBorderWidth: 3,
        borderBottomColor: 'black',
        display: 'flex',
        height: 60,
    },
    centerComponent: {
        text: 'EnTrack',
        icon: 'menu',
        style:{
            color: 'black',
            fontSize: 40,
        }
    },
    leftComponent: {
        icon: 'menu',
        color: 'black',
        alignContent: 'center',
    }
});