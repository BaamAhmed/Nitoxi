import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const TestListItem = ({item, navigation}) => {
    let percentStyle
    if (item.percentage < 10) {
        percentStyle = styles.percentStyleGreen
    } else if (item.percentage < 50) {
        percentStyle = styles.percentStyleYellow
    } else {
        percentStyle = styles.percentStyleRed
    }

    return (
        <TouchableOpacity style={styles.containerStyle} onPress={()=>{navigation.navigate('TestShow',{param: item._id})}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View>
                    <Text style={styles.dayStyle}>{item.testDay}</Text>
                    <Text style={styles.dateStyle}>{item.testDate}</Text>
                </View>
                <Text style={percentStyle}>{item.percentage}%</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerStyle : {
        backgroundColor: '#292929',
        marginVertical: 6,
        padding: 20,
        borderRadius: 15
    },
    dayStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25
    },
    dateStyle: {
        color: '#767578',
        fontSize: 18

    },
    percentStyleRed: {
        color: '#FB6F5A',
        fontWeight: 'bold',
        fontSize: 32
    },
    percentStyleYellow: {
        color: '#DFA348',
        fontWeight: 'bold',
        fontSize: 32
    },
    percentStyleGreen: {
        color: '#7FD068',
        fontWeight: 'bold',
        fontSize: 32
    }
})


export default TestListItem