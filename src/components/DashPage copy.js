import React, {useState} from 'react'
import {View, Text, StyleSheet, Dimensions, Modal, TouchableOpacity} from 'react-native'
import RecentActivity from "../components/RecentActivity"
import GlobalStats from "../components/GlobalStats"
import IndividualStats from "../components/IndividualStats"
import Overview from "../components/Overview"
import GetTested from "../components/GetTested"

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

const DashPage = ({navigation}) => {
    return (
        <View>
            <View style={styles.recentActivityStyle}>
                <RecentActivity navigation={navigation}/>
            </View>
            <View style={styles.statsStripStyle}>
                <View style={styles.statsStyle}>
                    <GlobalStats/>
                </View>
                <View style={styles.statsStyle}>
                    <IndividualStats/>
                </View>
            </View>
            <View style={styles.graphStyle}>
                <Overview/>
            </View>
            <View style={styles.getTestedStyle}>
                <GetTested navigation={navigation}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        // borderWidth: 3,
        // borderColor: "red",
        paddingVertical: screenHeight * 0.015,
        paddingHorizontal: screenWidth * 0.022,
        flex: 1,
        backgroundColor: '#424242'
    },
    recentActivityStyle: {
        backgroundColor: '#292929',
        height: screenHeight * 0.34,
        borderRadius: 15,
        // flex: 3,
        marginBottom: screenHeight* 0.0075
    },
    statsStripStyle: {
        height: screenHeight * 0.20,
        // flex: 2,
        alignItems: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: screenHeight* 0.0075
    },
    graphStyle: {
        height: screenHeight * 0.20,
        // flex: 2,
        alignItems: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: screenHeight* 0.0075,
        backgroundColor: '#292929',
        borderRadius: 15
    },
    statsStyle: {
        width: screenWidth * 0.464,
        backgroundColor: '#292929',
        borderRadius: 15
    },
    getTestedStyle: {
        // flex: 1,
        marginVertical: screenHeight* 0.0075
    }
})

export default DashPage

