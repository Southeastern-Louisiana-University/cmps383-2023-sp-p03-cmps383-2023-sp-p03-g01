import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderApp } from './App_src/Header';
import { HomePage } from './App_src/Pages/Home/HomePage';

export default function App() {
  return (
    <View /*style={styles.container}*/>
      <HomePage/>
      {/* <View style ={styles.content}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>This is kyle tran!</Text>
      <StatusBar style="auto" />
      </View> */}
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


