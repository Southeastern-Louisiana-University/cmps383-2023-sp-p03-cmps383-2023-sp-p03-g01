import React from "react";
import { View,Style } from "react-native";
import { SearchBar } from 'react-native-elements';

export function HomePageApp() {
  
    return (
        <View style = {styles.rootStyles}>
            <SearchBar
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}
            />
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    rootStyles: {
        width: '100%',
    
        display: 'flex',
        justifyContent: 'center',
    },
});

