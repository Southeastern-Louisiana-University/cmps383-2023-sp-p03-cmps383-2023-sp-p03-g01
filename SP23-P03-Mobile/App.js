import { HeaderApp } from './App_src/Compenents/Header/Header';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './App_src/Pages/Homepage';
import StationScreen from './App_src/Pages/StationInfopage';
import LoginScreen from './App_src/Pages/LoginPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {

  const Stack = createNativeStackNavigator();
  

  return (
    <NavigationContainer>
      {/* <HeaderApp /> */}
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Station" component={StationScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

