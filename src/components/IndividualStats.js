import React from 'react'
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native'
const screenHeight = Dimensions.get("window").height
const screenWidth = Dimensions.get("window").width


const IndividualStats = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.headingStyle}>Individual</Text>
                <Text style={{color: 'white', opacity: 0.3}}>(swipe)</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled>
                <View>
                    <Text style={styles.statStyle}>32</Text>
                    <Text style={styles.captionStyle}>NITOXI tests carried out so far</Text>
                </View>
                <View>
                    <Text style={styles.statStyle}>67%</Text>
                    <Text style={styles.captionStyle}>Average positivity probability</Text>
                </View>
                <View>
                    <Text style={styles.statStyle}>3</Text>
                    <Text style={styles.captionStyle}>Tests resulting in 90% positivity probability</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        padding: screenWidth * 0.036,
        flex: 1
    },
    headingStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        // marginBottom: screenHeight * 0.007
    },
    statStyle: {
        color: '#D89632',
        fontWeight: 'bold',
        fontSize: 50
    },
    captionStyle: {
        color: 'white',
        width: screenWidth * 0.4
    }
})

export default IndividualStats