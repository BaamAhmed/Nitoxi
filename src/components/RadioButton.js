import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

const RadioButton = ({value, setValue, fieldName, nextQ, setNextQ}) => {
    const [yesStyle, setYesStyle] = useState(styles.unselected)
    const [noStyle, setNoStyle] = useState(styles.unselected)
    return (
        <View style={styles.viewStyle}>
            <TouchableOpacity onPress={()=> {
                setValue(fieldName, true)
                setYesStyle(styles.selected)
                setNoStyle(styles.unselected)
                setNextQ(true)
            }}>
                <View style={yesStyle}>
                    <Text style={styles.buttonTextStyle}>Yes</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {
                setValue(fieldName, false)
                setYesStyle(styles.unselected)
                setNoStyle(styles.selected)
                setNextQ(false)
            }}>
                <View style={noStyle}>
                    <Text style={styles.buttonTextStyle}>No</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles= StyleSheet.create({
    buttonTextStyle: {
        color: 'white',
        fontSize: 18,
        paddingVertical: 10,
        paddingHorizontal: 25
    },
    unselected: {
        borderRadius: 10,
        backgroundColor: '#444444',
        marginRight: 20
    },
    selected: {
        borderRadius: 10,
        backgroundColor: '#111111',
        marginRight: 20
    },
    viewStyle: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    }
})

export default RadioButton