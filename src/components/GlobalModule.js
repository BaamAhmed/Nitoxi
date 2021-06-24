import React, {useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import useGlobalApi from '../hooks/useGlobalApi'

const StatsModule = ({country}) => {
    const [globalData, findActualGlobal] = useGlobalApi()
    useEffect(()=> {
        findActualGlobal()
    },[])
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.headingStyle} >Global</Text>
            <View style={{marginBottom: 20}}>
                <Text style={styles.labelStyle}>ACTIVE</Text>
                <Text style={styles.statStyle}>{globalData['Active Cases_text']}</Text>
            </View>
            <View style={{flexDirection: 'row', marginBottom: 20}}>
                <View style={{flex: 1}}>
                    <Text style={styles.labelStyle}>RECENT</Text>
                    <Text style={styles.statStyle} >{globalData['New Cases_text']}</Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.labelStyle}>RECENT DEATHS</Text>
                    <Text style={{...styles.statStyle, color: '#FB6F5A'}} >{globalData['New Cases_text']}</Text>
                </View>
            </View>
            <View style={{marginBottom: 20}}>
                <Text style={styles.labelStyle}>TOTAL</Text>
                <Text style={styles.statStyle}>{globalData['Total Cases_text']}</Text>
            </View>
            <View style={{marginBottom: 20}}>
                <Text style={styles.labelStyle}>TOTAL DEATHS</Text>
                <Text style={{...styles.statStyle, color: '#FB6F5A'}}>{globalData['Total Deaths_text']}</Text>
            </View>
            <View style={{marginBottom: 20}}>
                <Text style={styles.labelStyle}>TOTAL RECOVERED</Text>
                <Text style={{...styles.statStyle, color: '#7FD068'}}>{globalData['Total Recovered_text']}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        padding: 20,
        backgroundColor: '#292929',
        borderRadius: 10,
        marginBottom: 15
    },
    headingStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 10
    },
    labelStyle: {
        color: 'white',
        opacity: 0.66
    },
    statStyle: {
        color: '#4489E3',
        fontWeight: 'bold',
        fontSize: 35
    }
})

export default StatsModule