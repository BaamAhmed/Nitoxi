import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const LeftIcon = ({navigation}) => {

    const openMenu = () => {
        navigation.openDrawer()
    }
    return (
        <View>
            <TouchableOpacity onPress={openMenu}>
                <Ionicons name="ios-menu" style={{marginLeft: 13}} size={30} color="white" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default LeftIcon