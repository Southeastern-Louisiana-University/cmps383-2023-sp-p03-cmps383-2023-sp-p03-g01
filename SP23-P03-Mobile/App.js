import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { HeaderApp } from './App_src/Compenents/Header';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import  HomeScreen  from './App_src/Pages/Homepage';
import StationScreen from './App_src/Pages/StationInfopage';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
          <NavigationContainer>
            <HeaderApp/>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Station" component={StationScreen}/>
            </Stack.Navigator>
          </NavigationContainer>

  );
}

