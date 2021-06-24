import React, {useEffect} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import useGlobalApi from '../hooks/useGlobalApi'

const StatsModule = ({country}) => {
    const [data, findGlobal] = useGlobalApi()
    useEffect(()=> {
        findGlobal(country)
    },[])
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.headingStyle} >{country.charAt(0).toUpperCase() + country.slice(1)}</Text>
            <View style={{marginBottom: 20}}>
                <Text style={styles.labelStyle}>ACTIVE</Text>
                <Text style={styles.statStyle}>{data['Active Cases_text']}</Text>
            </View>
            <View style={{flexDirection: 'row', marginBottom: 20}}>
                <View style={{flex: 1}}>
                    <Text style={styles.labelStyle}>RECENT</Text>
                    {data['New Cases_text'] ? <Text style={styles.statStyle} >{data['New Cases_text']}</Text>: <Text style={styles.statStyle}>N/A</Text>}
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.labelStyle}>RECENT DEATHS</Text>
                    {data['New Cases_text'] ? <Text style={{...styles.statStyle, color: '#FB6F5A'}} >{data['New Deaths_text']}</Text>: <Text style={{...styles.statStyle, color: '#FB6F5A'}}>N/A</Text>}
                </View>
            </View>
            <View style={{marginBottom: 20}}>
                <Text style={styles.labelStyle}>TOTAL</Text>
                <Text style={styles.statStyle}>{data['Total Cases_text']}</Text>
            </View>
            <View style={{marginBottom: 20}}>
                <Text style={styles.labelStyle}>TOTAL DEATHS</Text>
                <Text style={{...styles.statStyle, color: '#FB6F5A'}}>{data['Total Deaths_text']}</Text>
            </View>
            <View style={{marginBottom: 20}}>
                <Text style={styles.labelStyle}>TOTAL RECOVERED</Text>
                <Text style={{...styles.statStyle, color: '#7FD068'}}>{data['Total Recovered_text']}</Text>
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