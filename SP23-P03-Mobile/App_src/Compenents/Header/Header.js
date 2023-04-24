import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { COLOR_PALETTE } from "../../styling/ColorPalette";
import { Button, Header, Overlay } from 'react-native-elements'
import { Title } from "./Title";
import { LoginBox } from "../LoginBox.js";
import axios from "axios";
import { BaseUrl } from "../../../configuration";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function HeaderApp({ navigation }) {

  const logout = () => {

    axios.post(`${BaseUrl}/api/authentication/logout`).catch((error) => {
      console.log(error);
    });
    AsyncStorage.removeItem('LOG_IN');
    navigation.navigate('Login');
  }


  return (
    <View style={styles.headerbox}>

      <Header
        // leftComponent={{
        //   icon: 'menu',
        //   color: COLOR_PALETTE.light.default.textColorPrimary,
        //   onPress: () => alert('ea'),
        // }}

        centerComponent={<Title />}

        rightComponent={<Button title="Sign Out"
          type="clear"
          titleStyle={styles.rightStyles}
          iconPosition="top"
          onPress={() => { logout() }}
        />}
        backgroundColor="white" />
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
  },
  rightStyles: {
    color: COLOR_PALETTE.light.default.textColorPrimary,
    fontSize: 15,
  },
});