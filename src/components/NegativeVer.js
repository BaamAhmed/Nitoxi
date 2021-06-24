import React, {useState, useContext} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {Context as TestContext} from '../context/testContext'
import {Context as AuthContext} from '../context/AuthContext'

const NegativeVer = ({item, navigation, setShow, show}) => {
    const {state} = useContext(AuthContext)
    const {update_test} = useContext(TestContext)
    const [covidResult, setCovidResult] = useState(false)
    const [positive, setPositive] = useState(styles.defaultStyle)
    const [negative, setNegative] = useState(styles.defaultStyle)
    return (
        <View>
            <Text style={styles.textStyle}>To help improve the accuracy of the algorithm, please tell us if you tested positive or negative an official test done within a week of giving this Nitoxi test.</Text>
            <Text style={styles.textStyle}>Your contribution is greatly appreciated!</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}}>
                <View style={{flex: 1}}>
                    <TouchableOpacity
                        onPress = {()=> {
                            setPositive(styles.selectedStyle)
                            setNegative(styles.defaultStyle)
                            setCovidResult(true)
                        }}
                    >
                        <View style={positive}>
                            <Text style={styles.labelStyle}>Positive</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1}}>
                    <TouchableOpacity
                        onPress={()=> {
                            setPositive(styles.defaultStyle)
                            setNegative(styles.selectedStyle)
                            setCovidResult(false)
                        }}
                    >
                        <View style={negative}>
                            <Text style={styles.labelStyle}>Negative</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
            </View>
            <TouchableOpacity onPress={()=> {
                if (positive === styles.selectedStyle || negative === styles.selectedStyle){
                    setShow(true)
                    update_test({covidResult, testId: item._id})
                }
            }}>
                <View style={styles.submitStyle}>
                    <Text style={styles.submitLabelStyle}>SUBMIT</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        color: '#A6A6A6',
        fontSize: 17,
        marginBottom: 7
    },
    defaultStyle: {
        flex: 1,
        backgroundColor: '#464646',
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 5
    },
    selectedStyle: {
        flex: 1,
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 5
    },
    labelStyle: {
        color: 'white',
        textAlign: 'center', 
        fontSize: 17
    },
    submitStyle: {
        backgroundColor: '#743ED2', 
        padding: 10, 
        borderRadius: 10, 
        marginHorizontal: 5
    },
    submitLabelStyle: {
        textAlign: 'center', 
        fontSize: 18, 
        color: 'white', 
        fontWeight: 'bold'
    }
})

export default NegativeVer