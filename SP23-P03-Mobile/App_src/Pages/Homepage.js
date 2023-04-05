import React, { useState } from "react";
import { View,StyleSheet,Text, FlatList } from "react-native";
import { Button, SearchBar } from 'react-native-elements';
import { TRAIN_STATIONS } from "../Models/TempFilterData/trainStations";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Item = ({title,state,city,navigation}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.title}>{city}, {state}</Text>
    <Button 
    onPress={() => 
    navigation.navigate("Station")
    } />
  </View>
);


export default function HomeScreen({navigation}) {

  const[search,setsearch] = useState('');
  const[searchresult,setsearchresult] = useState(TRAIN_STATIONS);
  const[searching,setsearching] = useState(false);

  function updatesearch(newsearch){
    if(newsearch.trim().length != 0){
    setsearching(true);
    setsearch(newsearch);
    setsearchresult(searchresult.filter(station => station.name.includes(newsearch)));
    }
    else{
      setsearching(false);
      setsearch("")
      setsearchresult(TRAIN_STATIONS);
    }
  }

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
            onChangeText={(search) => updatesearch(search) }
            value={search}
            backgroundColor ={ 'white'}
            />
          {searching && (<FlatList 
          data = {searchresult}
          renderItem={({item})=> <Item title={item.name} state ={item.state} city = {item.city} navigation = {navigation}/>}
          keyExtractor = {item => item.id}
          />)
        }
        
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
      backgroundColor: 'white',
      padding: 20,
      marginHorizontal: 16,
      borderWidth: .5, 
      borderRadius: 5
    },
    title: {
      fontSize: 28,
    },

});

