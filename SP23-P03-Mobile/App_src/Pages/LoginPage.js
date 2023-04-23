//a landing page to let the user sign into the react app before beginning to use it
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { COLOR_PALETTE } from '../styling/ColorPalette';
import { Button, Overlay} from 'react-native-elements';
import { LoginBox } from '../Compenents/LoginBox';

export default function LoginScreen() {

    const [visible, setVisible] = useState(false);

    const toggleLoginBox = () => {
        setVisible(!visible);
    };

    return(

        <View style={styles.loginPage}>
            <Image
                    source={require('../../assets/icon.png')}
                    style={{ width: 250, height: 250 }}
            />
            <Text style={{fontSize: 50, padding: 20}}>EnTrack</Text>  
            <Text style={{fontSize: 20, padding: 10}}>Sign in to begin your journey with us.</Text>
            <View style={{width:'70%'}}>
                <Button
                    title="Sign In"
                    titleStyle={styles.title}
                    type="solid"
                    buttonStyle={styles.button}
                    onPress={() => { toggleLoginBox() }}
                />
            </View>

            <Overlay 
          isVisible={visible}
          overlayStyle={{ width: '80%', height: '50%' }}
          onBackdropPress={toggleLoginBox}>

          <LoginBox/>

      </Overlay>
        </View>
    )
}

const styles = StyleSheet.create({
    loginPage: {
        display: 'flex',
        flexDirection: 'column',
        color: COLOR_PALETTE.light.default.textColorPrimary,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        textAlign: 'center',
    },
    button: {
        //width: '100%',
        backgroundColor: COLOR_PALETTE.light.default.kellyGreen,
        paddingVertical: 10,
        width: '100%',
    },
    title: {
        color: COLOR_PALETTE.light.default.cream,
        alignContent: 'center',
        justifyContent: 'center',
    },
});