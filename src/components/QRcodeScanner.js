import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import { Camera} from 'expo-camera';
import * as Permissions from "expo-permissions";
import * as BarCodeScanner from 'expo-barcode-scanner'


const QRcodeScanner = ({value, setValue, newModalVisible, setNewModalVisible, navigation})=> {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    

    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        // const { status } = await Permissions.askAsync(Permissions.CAMERA);
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      setValue('qrcode', data)
      navigation.navigate('Questions')
    //   alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };
  
    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }



    return (
        <View style={{flex: 1}}>
            <Camera
              // onCameraReady={Camera.resumePreview()}
                    // onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    // autoFocus={}
                    barCodeScannerSettings={{
                      barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
                    }}
                    onBarCodeRead={()=> {navigation.navigate('Dashboard')}}
                    style={{flex: 1}}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default QRcodeScanner