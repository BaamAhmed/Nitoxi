import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import TeamCard from '../components/TeamCard'
const screenHeight = Dimensions.get("window").height

const AboutScreen = () => {
    return (
        <View style={{flex: 1, backgroundColor: '#424242', paddingHorizontal: 20}}>
            <ScrollView showsVerticalScrollIndicator={false} style={{height: screenHeight-100}}>
            <View style={{marginBottom: 10}}>
                <Text style={styles.headingStyle}>The Vision</Text>
                <Text style={styles.paraStyle}>Nitoxi, created by Hammad Gadit, Bassam Ahmed, Sabeer Asad, and Zain Ibrahim primarily focuses on the infusion of healthcare and technology. Having gone through the misery of losing family members during these last two years, we knew we had to make a change. Our experience with the pandemic led us to create a product that aims to reduce the transmission by detecting changes in sensitivity to smell. </Text>
                <Text style={styles.paraStyle}>Nitoxi aims to test people actively rather than passively. It has two components: scratch cards that release a fragrance and an app that tracks the user’s sensitivity to smell.</Text>
                <Text style={styles.paraStyle}>Nitoxi stands out in the market by offering a broad essence of unique features. Amidst the pandemic, companies have high stakes on their sales and budget. Our product aims to cut down the chain of transmission.</Text>
            </View>
            <View>
                <Text style={styles.headingStyle}> The Team</Text>
                <Text style={styles.paraStyle}>Meet the people that brought Nitoxi into existence and who continue to strive for it's improvement</Text>
            </View>
            <TeamCard image='https://i.ibb.co/NCNzR63/image.png' name='Hammad Gadit' title='CHIEF EXECUTIVE OFFICER' align='right' />
            <TeamCard image='https://i.ibb.co/SvhxZcP/image.png' name='Bassam Ahmed' title='CHIEF TECHNICAL OFFICER' align='left' />
            <TeamCard image='https://i.ibb.co/m8xhRGT/image.png' name='Sabeer Asad' title='HEAD OF RESEARCH AND DEVELOPMENT' align='right' />
            <TeamCard image='https://i.ibb.co/bdwG0P0/image.png' name='Karan Vankwani' title='CHIEF OPERATIONS OFFICER' align='left' />
            <TeamCard image='https://i.ibb.co/4jf74RJ/image.png' name='Zain Ibrahim' title='FORMER OPERATIONS OFFICER' align='right' />
            {/* <TeamCard image='https://i.ibb.co/8DCkcjz/image.png' name='Shayaan Salahuddin' title='MARKETING MANAGER' align='right' /> */}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 32,
        marginVertical: 20
    },
    paraStyle: {
        color: '#CCCCCC', 
        fontSize: 16, 
        marginBottom: 20
    }

})

export default AboutScreen

// Nitoxi, created by Hammad Gadit, Bassam Ahmed, Sabeer Asad, and Zain Ibrahim primarily focuses on the infusion of healthcare and technology. Having gone through the misery of losing family members to this pandemic, we knew we had to make a change. Our experience with the pandemic led us to create a product that aims to reduce the transmission of COVID-19 by detecting changes in sensitivity to smell. 

// Nitoxi aims to test Coronavirus actively rather than passively. It has two components: scratch cards that release a fragrance and an app that tracks the user’s sensitivity to smell. 

// Nitoxi stands out in the market by offering a broad essence of unique features. Amidst the pandemic, companies have high stakes on their sales and budget. Our product aims to cut down the chain of transmission . 

// Nitoxi is intended to be marketed towards individuals, large businesses, hospitals, and educational institutes.