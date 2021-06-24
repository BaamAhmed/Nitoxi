import React from 'react'
import {View, SafeAreaView, ScrollView, Text, StyleSheet} from 'react-native'
import {DrawerItems} from 'react-navigation-drawer'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SideBar = (props) => {
    return (
        <SafeAreaView style={{backgroundColor: '#743ED2', flex: 1}}>
            <View style={{padding: 10}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, padding: 5, marginTop: 20}}>
                    <View >
                        <Text style={{color: 'white', fontWeight: '700', fontSize: 40, textAlign: 'left'}}>NITOXI</Text>
                        {/* <Text style={{color: 'white', fontWeight: '300', fontSize: 10, bottom: 5, textAlign: 'left'}}>FIGHTING COVID TOGETHER</Text> */}
                    </View>
                    <MaterialCommunityIcons name="microscope" size={70} color="white" />
                </View>
                <ScrollView style={{backgroundColor: '#743ED2'}}>
                    <DrawerItems
                        itemsContainerStyle={{borderRadius: 10}}
                        itemStyle={{borderRadius: 10}}
                        activeBackgroundColor='#3A1F69'
                        labelStyle={{color: 'white', fontSize: 16, fontWeight: '500', margin: 15}}
                        {...props}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default SideBar