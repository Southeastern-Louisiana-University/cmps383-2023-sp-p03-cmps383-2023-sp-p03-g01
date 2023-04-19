import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export function Title() {
    return(
        <View style={styles.title}>
            <Image
                    source={require('../assets/icon.png')}
                    style={{ width: 30, height: 30 }}
            />
            <Text style={{fontSize: 30}}>EnTrack</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        display: 'flex',
        flexDirection: 'row',
        color: 'black',
    },
});