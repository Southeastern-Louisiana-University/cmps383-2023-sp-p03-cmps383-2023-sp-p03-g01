import React, { useState } from "react";
import { View, Text} from "react-native";
import { TRAIN_STATIONS } from "../Models/TempFilterData/trainStations"

export default function StationScreen() {
    const [Train,SetTrain] = useState(TRAIN_STATIONS[1]);
    return(
        <View>
            <Text>{Train.name}</Text>
            <Text>{Train.address}</Text>
            <Text>{Train.city}</Text>
            <Text>{Train.state}</Text>
            <Text>{Train.zip}</Text>
        </View>
    );
}