// A tool for logging in the user made with react native elements

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { COLOR_PALETTE } from '../styling/ColorPalette';
import axios from 'axios';
import { BaseUrl } from '../../configuration';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthCookieContext = React.createContext({
    loginState: {
        user: null,
    },
    setLoginState: (
        loginState = {
            user: null,
        }
    ) => { },
});


export function LoginBox({ navigation }) {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const { setLoginState } = React.useContext(AuthCookieContext);

    // Log in the user with the given credentials and navigate to the ticket page if successful or alert the user if unsuccessful
    const login = () => {
        console.log(username);
        console.log(password);
        axios.post(`${BaseUrl}/api/authentication/login`, {
            username: username,
            password: password,
        }, { headers: { 'Content-Type': 'application/json' } })
            .then((response) => {
                console.log(response.data);

                if (response.status === 200) {
                    setLoginState({
                        user: response.data,
                    });
                    AsyncStorage.setItem('LOG_IN', JSON.stringify(response));
                    navigation.push('Tickets');
                } else {
                    alert(response.status);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleUsernameChange = (text) => {
        setUsername(text);
    }

    const handlePasswordChange = (text) => {
        setPassword(text);
    }

    return (
        <View style={styles.loginbox}>
            <Input
                placeholder='Email'
                onChangeText={handleUsernameChange}
            />
            <Input
                placeholder='Password'
                secureTextEntry={true}
                onChangeText={handlePasswordChange}
            />

            <Button
                title="Sign In"
                //titleStyle={styles.title}
                type="solid"
                buttonStyle={styles.button}
                onPress={() => { login() }}
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