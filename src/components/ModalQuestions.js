import React, {useState, useEffect, useContext} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Dimensions, Button} from 'react-native'
import RealQuestions from "./RealQuestions"
import {Context as AuthContext} from '../context/AuthContext'


const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height


const ModalQuestions = ({modalVisible, setModalVisible, navigation}) => {
    const {state} = useContext(AuthContext)


    

    return (
        <View style={styles.viewStyle}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: screenHeight*0.02}}>
                <Text style={styles.headingStyle}>New Test</Text>
                <TouchableOpacity style={{borderRadius: 10}} onPress={()=> {setModalVisible(!modalVisible)}}>
                    <View style={{borderRadius: 8, backgroundColor: 'black'}}>
                        <Text style={styles.cancelStyle}>Cancel</Text>
                    </View>


                </TouchableOpacity>

            </View>
                   
            <RealQuestions authState={state} navigation={navigation} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        paddingHorizontal: screenWidth * 0.07,
        paddingTop: screenHeight * 0.04,
        backgroundColor: "#1F1F1F",
        flex: 1
    },
    headingStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
    }, 
    cancelStyle: {
        color: '#8555D7',
        fontSize: 17,
        padding: screenWidth * 0.02
    }
})

export default ModalQuestions