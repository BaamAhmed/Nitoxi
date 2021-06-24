import React from 'react'
import {View, ScrollView, Text, StyleSheet} from 'react-native'
import QRCodeModal from '../components/QRCodeModal'


const CameraScreen = ({navigation}) => {
    const formikProps = navigation.getParam('props')
    return (
        <View style={{flex: 1, backgroundColor: '#424242', paddingHorizontal: 20}}>
            <QRCodeModal 
                value={formikProps.values.qrcode} 
                setValue={formikProps.setFieldValue} 
                navigation={navigation}
            />
        </View>
    )
}

export default CameraScreen