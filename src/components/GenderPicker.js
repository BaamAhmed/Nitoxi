import React, {useState} from 'react'
import { TouchableOpacity } from 'react-native'
import {View, Text, StyleSheet} from 'react-native'

const GenderPicker = ({value, setValue}) => {
    const [maleButton, setMaleButton] = useState(styles.buttonStyle)
    const [femaleButton, setFemaleButton] = useState(styles.buttonStyle)
    const [otherButton, setOtherButton] = useState(styles.buttonStyle)
    return (
        <View style={styles.genderInput}>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'stretch'}}>
                <View style={maleButton}>
                    <TouchableOpacity style={{justifyContent: 'center'}} onPress={()=>{
                        setFemaleButton(styles.buttonStyle)
                        setOtherButton(styles.buttonStyle)
                        setMaleButton(styles.selectedButtonStyle)
                        setValue('gender', 'Male')
                    }}>
                            <Text style={styles.buttonLabelStyle}>Male</Text>
                    </TouchableOpacity>
                </View>
                <View style={femaleButton}>
                    <TouchableOpacity style={{justifyContent: 'center'}} onPress={()=>{
                        setFemaleButton(styles.selectedButtonStyle)
                        setOtherButton(styles.buttonStyle)
                        setMaleButton(styles.buttonStyle)
                        setValue('gender', 'Female')
                    }}>
                        <Text style={styles.buttonLabelStyle}>Female</Text>
                    </TouchableOpacity>
                </View>
                <View style={otherButton}>
                    <TouchableOpacity style={{justifyContent: 'center'}} onPress={()=>{
                        setFemaleButton(styles.buttonStyle)
                        setOtherButton(styles.selectedButtonStyle)
                        setMaleButton(styles.buttonStyle)
                        setValue('gender','Other')
                    }}>
                        <Text style={styles.buttonLabelStyle}>Other</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    genderInput: {
        backgroundColor: '#3B2068',
        height: 50,
        borderRadius: 10,
        color: 'white',
        fontSize: 18,
        marginVertical:10,
        flex: 7,
        marginHorizontal: 5,
        justifyContent: 'center'
    },
    buttonLabelStyle: {
        textAlign: 'center',
        color: 'white',
        // backgroundColor: 'white',
        height: 38,
        paddingTop: 10
    },
    buttonStyle: {
        backgroundColor: '#2B1058',
        height: 38,
        margin: 6,
        flex: 1,
        justifyContent: 'center',
        borderRadius: 10
    },
    selectedButtonStyle: {
        backgroundColor: '#222222',
        height: 38,
        margin: 6,
        flex: 1,
        justifyContent: 'center',
        borderRadius: 10
    }
})

export default GenderPicker