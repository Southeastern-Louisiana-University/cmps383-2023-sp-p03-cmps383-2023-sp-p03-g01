import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { COLOR_PALETTE } from "../../styling/ColorPalette";
import { Button, Header, Overlay } from 'react-native-elements'
import { Title } from "./Title";
import { LoginBox } from "../LoginBox.js";


export function HeaderApp() {

  const [visible, setVisible] = useState(false);

  const toggleLoginBox = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.headerbox}>

      <Header
        leftComponent={{
          icon: 'menu',
          color: COLOR_PALETTE.light.default.textColorPrimary,
          onPress: () => alert('ea'),
        }}

        centerComponent={<Title />}

        rightComponent={<Button title="Sign In"
          type="clear"
          titleStyle={styles.rightStyles}
          iconPosition="top"
          onPress={() => {toggleLoginBox()}}
        />}
        backgroundColor="white" />

      <Overlay 
          isVisible={visible}
          overlayStyle={{ width: '80%', height: '50%' }}
          onBackdropPress={toggleLoginBox}>

          {<LoginBox/>}

      </Overlay>
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