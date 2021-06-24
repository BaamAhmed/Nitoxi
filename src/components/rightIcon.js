import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const RightIcon = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={()=> {navigation.navigate('Account')}}>
            
            <MaterialCommunityIcons name="account" style={{marginRight: 13}} size={30} color="white" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default RightIcon