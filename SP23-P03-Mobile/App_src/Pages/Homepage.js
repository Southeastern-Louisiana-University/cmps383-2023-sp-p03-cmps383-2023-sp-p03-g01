import React, { useState } from "react";
import { View,StyleSheet,Text, FlatList } from "react-native";
import { SearchBar } from 'react-native-elements';
import { TRAIN_STATIONS } from "../Models/TempFilterData/trainStations";

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}{}</Text>
  </View>
);
const listofTrain_Stations = TRAIN_STATIONS;

export default function HomeScreen() {
  const[search,setsearch] = useState('');


    return (
      <View style = {styles.content}>
        <View style = {styles.TextaboveSearchbox}>
          <Text>Where do you want to go?</Text>
        </View>
            <SearchBar
            inputStyle={{backgroundColor: 'white'}}
            containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5}}
            placeholderTextColor={'#g5g5g5'}
            inputContainerStyle={{backgroundColor: 'white'}}
            placeholder={search}
            onChangeText={(search) => setsearch(search) }
            value={search}
            backgroundColor ={ 'white'}
            />
          <FlatList 
          data = {listofTrain_Stations}
          renderItem={({item})=> <Item title={item.name}/>}
          keyExtractor = {item => item.id}
          />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    content:{
      flex: 1,
      padding:10
    },
    TextaboveSearchbox:{
      alignItems: 'center', 
      justifyContent: 'center' 
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },

});

