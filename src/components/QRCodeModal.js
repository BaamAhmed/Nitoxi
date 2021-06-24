import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import QRcodeScanner from "./QRcodeScanner"

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

const QRCodeModal = ({value, setValue, navigation}) => {
    return (
        <View style={styles.viewStyle}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: screenHeight*0.02}}>
                <Text style={styles.headingStyle}>Scan QR Code</Text>
                <TouchableOpacity style={{borderRadius: 10}} onPress={()=> {setNewModalVisible(false)}}>
                    <View style={{borderRadius: 8, backgroundColor: 'black'}}>
                        <Text style={styles.cancelStyle}>Cancel</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={styles.subTextStyle}>Point your phone at the QR Code and wait for it to scan. Once scanned, this window will automatically close and the scanned ID will be visible in the appropriate field. If not, please attempt to scan again by pressing the 'scan' button.</Text>
            <QRcodeScanner 
                value={value} 
                setValue={setValue}
                navigation={navigation}
    
            />

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
    },
    subTextStyle: {
        color: 'white',
        opacity: 0.5,
        fontSize: 16,
        marginBottom: 40
    }
})

export default QRCodeModal