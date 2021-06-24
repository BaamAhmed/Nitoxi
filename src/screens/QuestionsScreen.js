import React from 'react'
import {View, ScrollView, Text, StyleSheet, TouchableOpacity} from 'react-native'
import RealQuestions from "../components/RealQuestions"



const QuestionsScreen = ({navigation}) => {
    const state = navigation.getParam('state')
    return (
        <View style={{flex: 1, backgroundColor: '#424242', paddingHorizontal: 20}}>
            <View style={styles.containerStyleRow}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Dashboard')}}>
                    <View style={{backgroundColor: '#1D1D1D', padding: 10, borderRadius: 7}}>
                        <Text style={{color: 'white'}}>Go Back</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <RealQuestions authState={state} navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#292929',
        padding: 20,
        borderRadius: 15,
        justifyContent: 'space-between',
        marginVertical: 10,
        // height: 200
    },
    containerStyleRow: {
        backgroundColor: '#292929',
        padding: 10,
        paddingRight: 20,
        borderRadius: 15,
        flexDirection: 'row', 
        justifyContent: 'flex-start',
        marginVertical: 10,
        alignItems: 'center'
    },
    dayStyle: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'right',
        marginRight: 7
    },
    dateStyle: {
        color: '#767578',
        fontSize: 22,
        textAlign: 'right'
    },
    headingStyleRed: {
        color: '#FB6F5A',
        fontWeight: 'bold',
        fontSize: 32
    },
    headingStyleYellow: {
        color: '#DFA348',
        fontWeight: 'bold',
        fontSize: 32
    },
    headingStyleGreen: {
        color: '#7FD068',
        fontWeight: 'bold',
        fontSize: 32
    },
    centerPercentStyleRed: {
        fontWeight: 'bold',
        fontSize: 50,
        color: '#FB6F5A',
        position: 'absolute'
    },
    centerPercentStyleYellow: {
        fontWeight: 'bold',
        fontSize: 50,
        color: '#DFA348',
        position: 'absolute'
    },
    centerPercentStyleGreen: {
        fontWeight: 'bold',
        fontSize: 50,
        color: '#7FD068',
        position: 'absolute'
    },
    supportingParaStyle: {
        marginTop: 10,
        color: '#A6A6A6',
        fontSize: 17
    }
})

export default QuestionsScreen