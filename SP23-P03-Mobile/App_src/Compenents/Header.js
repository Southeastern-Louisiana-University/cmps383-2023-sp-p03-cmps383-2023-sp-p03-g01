import React from "react";
import {  StyleSheet,Text, View } from 'react-native';
import { COLOR_PALETTE } from "../styling/ColorPalette";
import { Header } from 'react-native-elements'
import { Title } from "./Title";


export function HeaderApp() {
  
    return (
        <View style = {styles.headerbox}>
            <Header          
            leftComponent={{
            icon: 'menu',
            color: COLOR_PALETTE.light.default.textColorPrimary ,
            onPress: () => alert('ea'),
          }}
          centerComponent={<Title/>}
          rightComponent={{ icon: 'home', color: COLOR_PALETTE.light.default.textColorPrimary }}
          backgroundColor="white"/>
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    headerbox: {
        borderBottomColor: COLOR_PALETTE.light.default.borderColor,
        borderBottomWidth: 1,
    },
    centerStyles: {
      color: COLOR_PALETTE.light.default.textColorPrimary,
      fontSize: 15,
    }
  });