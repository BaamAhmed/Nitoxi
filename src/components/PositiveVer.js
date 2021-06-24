import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const PositiveVer = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Verified. Thank you for your contribution!</Text>
            <AntDesign style={{textAlign: 'center'}} name="checkcircleo" size={80} color="#7FD068" />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        color: '#A6A6A6',
        fontSize: 17,
        marginBottom: 20
    }
})

export default PositiveVer