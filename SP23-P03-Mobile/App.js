import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderApp } from './App_src/Compenents/Header';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './App_src/Pages/Homepage' ;


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <View style={styles.container}>
      <HeaderApp/>
        <View style ={styles.content}>
          <Text>Words</Text>
      <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  },
  content:{
    alignItems: 'center',
    justifyContent: 'center',
  }
  
});
