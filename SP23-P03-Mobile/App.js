import { HeaderApp } from './App_src/Compenents/Header';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './App_src/Pages/Homepage';
import StationScreen from './App_src/Pages/StationInfopage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';


export default function App() {

  const Stack = createNativeStackNavigator();
  

  return (
    <NavigationContainer>
      <HeaderApp />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Station" component={StationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

