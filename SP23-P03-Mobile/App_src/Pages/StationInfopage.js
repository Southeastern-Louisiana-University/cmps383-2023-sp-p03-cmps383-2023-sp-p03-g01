import React, { useState } from "react";
import { View,Text,StyleSheet,FlatList} from "react-native";
import { TRAIN_ROUTE } from "../Models/TempFilterData/trainRoute";
import { TRAIN_STATIONS } from "../Models/TempFilterData/trainStations"

export default function StationScreen() {
    const [Train,SetTrain] = useState(TRAIN_STATIONS[1]);
    const [TrainRoute,setTrainRoute] = useState(TRAIN_ROUTE)
    return(
        <View style = {styles.content}>
            <View style ={styles.StationInfobox}>
                <Text style = {styles.title}>TrainStation Info:</Text>
                <Text>{Train.name}</Text>
                <Text>{Train.address}</Text>
                <Text>{Train.city}, {Train.state} {Train.zip}</Text>
            </View>
            <View>
            <FlatList 
          data = {TrainRoute}
          renderItem={({item})=> <Item ArrivalTime={item.ArrivalTime} DeperatureTime={item.DeperatureTime} 
          StartingStation = {item.StartingTrainStation} EndingTrainStation = {item.EndingTrainStation}
          TrainId = {item.TrainId}
          />}
          keyExtractor = {item => item.id}        
          />
            </View>
        </View>
    );
}
const Item = ({ArrivalTime,DeperatureTime,StartingStation,EndingTrainStation,TrainId}) => (
    <View style = {styles.padding}>
        <View style={styles.item}>
        <Text style={styles.Details}>{ArrivalTime} - {DeperatureTime}</Text>
        <Text style={styles.Details}>{StartingStation} - {EndingTrainStation}</Text>
        <Text style={styles.Details}>Train Id:{TrainId}</Text>
        </View>
    </View>
  );
const styles = StyleSheet.create({
    content:{
        flex: 1,
        padding:10
    },
    StationInfobox: {
        borderWidth: 1,
        padding:5,
        backgroundColor: 'white',
        fontSize:15,
    },
    Details:{
        fontSize: 20,
    },
    item:{
        padding: 10,
        borderWidth: 1,
        backgroundColor: 'white',
    },
    padding:{
        paddingTop:5
    },
    title:{
        alignItems: 'center', 
        justifyContent: 'center' 
    }
});