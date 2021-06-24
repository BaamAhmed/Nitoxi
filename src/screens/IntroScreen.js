import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import GetTested from '../components/GetTested'


const IntroScreen = ({navigation})=> {
    return (
        <View style={{flex: 1, backgroundColor: '#743ED2'}}>
            <MaterialCommunityIcons name="microscope" style={{marginTop: 30, textAlign: 'center', marginBottom: 20}} size={100} color="white" />
            <View style={{flex: 1, backgroundColor: '#424242', borderTopLeftRadius: 25, borderTopRightRadius: 25, padding: 30, justifyContent: 'space-between'}}>
                <View>
                    <Text style={styles.headingStyle}>Welcome!</Text>
                    <Text style={styles.paraStyle}>Founded during intellectual conversations between friends regarding the pandemic, Nitoxi has evolved in the past few months from an idea to a reality. Our vision to make a significant impact on the transmission of the deadly coronavirus has come one step closer.</Text>
                    <Text style={styles.paraStyle}>As we have come to realize over the past few months, nothing is more inspiring than a community, which is willing to make a change. We thank all of you for joining us on this journey to play your part in curtailing the spread of this virus and hence saving countless lives, which are still to be lived.</Text>
                    <Text style={styles.paraStyle}>We would like to end this message with a quote that resonates with us  “Your life doesn't get better by chance, it gets better by change”. We would like to encourage all of you to be the change you want to make in order to reduce the misery caused by this pandemic.</Text> 
                </View>
                <View style={{margin: 3, alignSelf: 'stretch'}}>
                    <GetTested navigation={navigation}/>
                </View>
            </View>
        </View>
    )
}

IntroScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  }

const styles = StyleSheet.create({
    headingStyle: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#A87EEF',
        marginBottom: 20
    },
    paraStyle: {
        color: 'white',
        opacity: 0.7,
        fontSize: 16,
        marginBottom: 10
    }
})

export default IntroScreen