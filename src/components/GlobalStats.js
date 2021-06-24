import React, {useEffect} from 'react'
import {View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity} from 'react-native'
import useGlobalApi from '../hooks/useGlobalApi'


const screenHeight = Dimensions.get("window").height
const screenWidth = Dimensions.get("window").width

const GlobalStats = ({style}) => {
    const [data, findGlobal, globalData, findActualGlobal] = useGlobalApi()
    useEffect(()=>{
        findActualGlobal()
    },[])
    return (
        <View style={style}>
            <View  style={styles.viewStyle}>
                <View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.headingStyle}>Global Statistics</Text>
                        <Text style={{color: 'white', opacity: 0.3, paddingRight: 15}}>(swipe)</Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled contentContainerStyle={{flexDirection: 'row'}}>
                        <View style={{width: screenWidth*0.975, paddingLeft: 15}}>
                            {globalData? <Text style={styles.statStyle}>{globalData['Active Cases_text']}</Text>: <Text style={styles.statStyle}>Loading</Text>}
                            <Text style={styles.captionStyle}>Active cases</Text>
                        </View>
                        <View style={{width: screenWidth*0.975, paddingLeft: 15}}>
                            {globalData? <Text style={styles.statStyle}>{globalData['Total Cases_text']}</Text>: <Text style={styles.statStyle}>Loading</Text>}
                            <Text style={styles.captionStyle}>Total cases recorded (all-time)</Text>
                        </View>
                        <View style={{width: screenWidth*0.975, paddingLeft: 15}}>
                            {globalData? <Text style={styles.statStyle}>{globalData['Total Recovered_text']}</Text>: <Text style={styles.statStyle}>Loading</Text>}
                            <Text style={styles.captionStyle}>Total recoveries recorded (all-time)</Text>
                        </View>
                        <View style={{width: screenWidth*0.975, paddingLeft: 15}}>
                            {globalData? <Text style={styles.statStyle}>{globalData['New Cases_text']}</Text>: <Text style={styles.statStyle}>Loading</Text>}
                            <Text style={styles.captionStyle}>New cases recorded recently</Text>
                        </View>
                        <View style={{width: screenWidth*0.975, paddingLeft: 15}}>
                            {globalData? <Text style={styles.statStyle}>{globalData['New Deaths_text']}</Text>: <Text>Loading</Text>}
                            <Text style={styles.captionStyle}>New deaths recorded recently</Text>
                        </View>
                    </ScrollView>
                </View>
                
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        paddingVertical: 15,
        flex: 1
    },
    headingStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        paddingLeft: 15
        // marginBottom: screenHeight * 0.007
    },
    statStyle: {
        color: '#D89632',
        fontWeight: 'bold',
        fontSize: 50
    },
    captionStyle: {
        color: 'white',
        // width: screenWidth * 0.35
    }
})

export default GlobalStats