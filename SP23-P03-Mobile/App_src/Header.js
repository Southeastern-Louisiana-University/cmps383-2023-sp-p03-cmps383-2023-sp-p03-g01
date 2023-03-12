import React from "react";
import {  StyleSheet,Text, View } from 'react-native';
import { COLOR_PALETTE } from "./styling/ColorPalette";


export function HeaderApp() {
  
    return (
        <View style = {styles.headerbox}>
            <Text>Potato</Text>
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    headerbox: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: `${COLOR_PALETTE.light.default.borderColor}`,
        display: 'flex',
        height: 60,
    },
});