import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

const Responses = ({item}) => {
    return (
        <View>
            <Text style={styles.headingStyle}>Your Responses</Text>
            <Text style={{color: '#A6A6A6', fontSize: 14}}>Note: All numeric responses are on a scale of 1 to 10</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, paddingVertical: 10}}>
                <Text style={styles.subtextStyle}>How strong do you think the smell is?</Text>
                <Text style={styles.answerStyle}>{item.q1/10}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, paddingVertical: 10}}>
                <Text style={styles.subtextStyle}>Have you had fever in the past 72 hours?</Text>
                {item.q2 ? <Text style={styles.answerStyle}>Yes</Text>: <Text style={styles.answerStyle}>No</Text>}
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, paddingVertical: 10}}>
                <Text style={styles.subtextStyle}>Do you have a cough?</Text>
                {item.q3 ? <Text style={styles.answerStyle}>Yes</Text>: <Text style={styles.answerStyle}>No</Text>}
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, paddingVertical: 10}}>
                <Text style={styles.subtextStyle}>Do you have any difficulty breathing?</Text>
                {item.q4 ? <Text style={styles.answerStyle}>Yes</Text>: <Text style={styles.answerStyle}>No</Text>}
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, paddingVertical: 10}}>
                <Text style={styles.subtextStyle}>What proportion of people in your household are currently sick or recently have been sick?</Text>
                <Text style={styles.answerStyle}>{item.q5/10}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, paddingVertical: 10}}>
                <Text style={styles.subtextStyle}>Did you recently attend a large outdoor event?</Text>
                {item.q6 ? <Text style={styles.answerStyle}>Yes</Text>: <Text style={styles.answerStyle}>No</Text>}
            </View>
            {item.q6 ?
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, paddingVertical: 10}}>
                    <Text style={styles.subtextStyle}>Did you wear a face mask while attending said event?</Text>
                    {item.q6_1 ? <Text style={styles.answerStyle}>Yes</Text>: <Text style={styles.answerStyle}>No</Text>}
                </View>
            : null}
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, paddingVertical: 10}}>
                <Text style={styles.subtextStyle}>Do you have a smoking habit?</Text>
                {item.q7 ? <Text style={styles.answerStyle}>Yes</Text>: <Text style={styles.answerStyle}>No</Text>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingStyle : {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 23
    },
    subtextStyle: {
        color: '#A6A6A6',
        fontSize: 18,
        flex: 5
    },
    answerStyle: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 25,
        flex: 1,
        textAlign: 'right'
    }
})

export default Responses