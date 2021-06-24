import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Dimensions, Modal} from 'react-native'
import ModalQuestions from "../components/ModalQuestions"
const screenHeight = Dimensions.get("window").height


const GetTested = ({navigation, authState}) => {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View> 
            {/* <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    // Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
                presentationStyle={'pageSheet'}
                >
                <ModalQuestions navigation={navigation} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
            </Modal> */}
            <TouchableOpacity onPress={()=> {navigation.navigate('Questions', {state: authState})}}>
                <View style={styles.viewStyle}>
                    <Text style={styles.buttonStyle}>Get Tested</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        padding: screenHeight * 0.02,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 19,
        color: 'white'
    },
    viewStyle: {
        justifyContent: 'center',
        backgroundColor: '#743ED2',
        // flex: 1,
        borderRadius: 15
    }
})

export default GetTested