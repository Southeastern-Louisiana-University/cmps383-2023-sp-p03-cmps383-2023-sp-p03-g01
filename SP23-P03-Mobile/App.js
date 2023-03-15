import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { HeaderApp } from './App_src/Compenents/Header';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './App_src/Pages/Homepage' ;



const Stack = createNativeStackNavigator();

export default function App() {
  return (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
          </NavigationContainer>

  );
}

const styles = StyleSheet.create({

  content:{
    flex: 1,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  }
  
});