import React, {useState, useContext} from 'react'
import {View, Text, StyleSheet, TextInput, Button, TouchableOpacity, ScrollView, Modal, Dimensions} from 'react-native'
import {Formik} from 'formik'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import RadioButton from "./RadioButton"
import Slider from '@react-native-community/slider'
import QRCodeModal from "./QRCodeModal"
import {Context as AuthContext} from '../context/AuthContext'
import {Context} from '../context/testContext'
import * as yup from 'yup'
import { Linking } from 'react-native';

const testSchema = yup.object({
    qrcode: yup.string().required()
})
const screenHeight = Dimensions.get("window").height


const RealQuestions = ({navigation, authState}) => {
    const {state, new_test} = useContext(Context)
    // const {state} = useContext(AuthContext)
    const [q6_1, setq6_1] = useState(false)
    const [waste, setwaste] = useState(false)
    const [newModalVisible, setNewModalVisible] = useState(false)
    const [showError, setShowError] = useState(false) 

    return (
        <ScrollView style={{height: screenHeight-100, paddingBottom: 30}} showsVerticalScrollIndicator={false}>
            <MaterialCommunityIcons style={{textAlign: 'center', marginBottom: 20}} name="credit-card-multiple-outline" size={200} color="white" />
            <Text style={styles.headingStyle}>Instructions</Text>
            <Text style={styles.subTextStyle}>Open the attached alcohol pad packet, try to smell the resulting fragrance from the pad, and then answer the following questions.</Text>
            <Formik
                validationSchema={testSchema}
                initialValues={{q1: 0, q2: false, q3: false, q4: 0,q5:0, q6: false, q6_1:false, q7: false, qrcode:'', verified: false, covidResult: false}}
                onSubmit={async (values)=>{
                    console.log(values)
                    console.log(authState.token)
                    try {
                        await new_test({values, token: authState.token, navigation})
                        await console.log(state)
                        if(!state.errorMessage){
                            navigation.navigate('TestShow', {param: state.testId})
                        } else {
                            console.log('error')
                            setShowError(true)
                        }

                    } catch (err){
                        console.log('error from onSubmit function: ', err)
                    }
                }}
            >
                {(formikProps)=>(
                    <View>
                        <View style={styles.questionView}>   
                            <Text style={styles.questionLabelStyle}>Question 1</Text>
                            <Text style={styles.questionStyle}>How strong do you think the smell is?</Text>
                            <Slider
                                style={{marginTop: 20}}
                                minimumValue={0}
                                maximumValue={100}
                                minimumTrackTintColor="#743ED2"
                                maximumTrackTintColor="#000000"
                                onSlidingComplete={value=>formikProps.setFieldValue('q1', value)}
                                step={1}
                            />
                            <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                                <Text style={styles.questionLabelStyle}>Very Weak</Text>
                                <Text style={styles.questionLabelStyle}>Moderate</Text>
                                <Text style={styles.questionLabelStyle}>Very Strong</Text>
                            </View>
                        </View>

                        <View style={styles.questionView}>   
                            <Text style={styles.questionLabelStyle}>Question 2</Text>
                            <Text style={styles.questionStyle}>Have you had fever in the past 72 hours?</Text>
                            <RadioButton 
                                value={formikProps.values.q2} 
                                fieldName={'q2'} 
                                setValue={formikProps.setFieldValue}
                                nextQ={waste}
                                setNextQ={setwaste}
                                />
                        </View>
                        <View style={styles.questionView}>   
                            <Text style={styles.questionLabelStyle}>Question 3</Text>
                            <Text style={styles.questionStyle}>Do you have a cough?</Text>
                            <RadioButton 
                                value={formikProps.values.q3} 
                                fieldName={'q3'} 
                                setValue={formikProps.setFieldValue}
                                nextQ={waste}
                                setNextQ={setwaste}
                                />
                        </View>

                        <View style={styles.questionView}>   
                            <Text style={styles.questionLabelStyle}>Question 4</Text>
                            <Text style={styles.questionStyle}>Do you have any difficulty breathing?</Text>
                            <RadioButton 
                                value={formikProps.values.q4} 
                                fieldName={'q3'} 
                                setValue={formikProps.setFieldValue}
                                nextQ={waste}
                                setNextQ={setwaste}
                                />
                        </View>
                        
                        <View style={styles.questionView}>   
                            <Text style={styles.questionLabelStyle}>Question 5</Text>
                            <Text style={styles.questionStyle}>What proportion of people in your household are currently sick or have recently been sick?</Text>
                            <Slider
                                style={{marginTop: 20}}
                                minimumValue={0}
                                maximumValue={100}
                                minimumTrackTintColor="#743ED2"
                                maximumTrackTintColor="#000000"
                                onSlidingComplete={value=>formikProps.setFieldValue('q5', value)}
                                step={1}
                            />
                            <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                                <Text style={styles.questionLabelStyle}>None of them</Text>
                                <Text style={styles.questionLabelStyle}>All of them</Text>
                            </View>
                        </View>
                        
                        
                        


                        <View style={styles.questionView}>   
                            <Text style={styles.questionLabelStyle}>Question 6</Text>
                            <Text style={styles.questionStyle}>Did you recently attend a large outdoor event?</Text>
                            <RadioButton 
                                value={formikProps.values.q1} 
                                fieldName={'q6'} 
                                setValue={formikProps.setFieldValue}
                                nextQ={q6_1}
                                setNextQ={setq6_1}
                                />
                        </View>

                        {q6_1 ?
                        
                        <View style={styles.questionView}>   
                            <Text style={styles.questionLabelStyle}>Question 6a</Text>
                            <Text style={styles.questionStyle}>Did you wear a face mask while attending said event?</Text>
                            <RadioButton 
                                value={formikProps.values.q1} 
                                fieldName={'q6_1'} 
                                setValue={formikProps.setFieldValue}
                                nextQ={waste}
                                setNextQ={setwaste}
                                />
                        </View>

                        : null}

                        <View style={styles.questionView}>   
                            <Text style={styles.questionLabelStyle}>Question 7</Text>
                            <Text style={styles.questionStyle}>Do you have a smoking habit?</Text>
                            <RadioButton 
                                value={formikProps.values.q1} 
                                fieldName={'q7'} 
                                setValue={formikProps.setFieldValue}
                                nextQ={waste}
                                setNextQ={setwaste}
                                />
                        </View>
                        
                        <Text style={styles.questionLabelStyle}>Verification</Text>
                        <Text style={styles.questionStyle}>Clicking the scan button below will take you to a QR Code scanning web app, where you will be able to get the verification ID, which you should paste into the field below to verify your test.</Text>
                        <View style={{flexDirection: 'row', marginTop: 30}}>
                            
                            <TextInput
                                // editable={false}
                                style={styles.idStyle}
                                onChangeText={(text)=>{formikProps.setFieldValue('qrcode', text)}}
                                placeholder={'Press the Scan Button'}
                                // value={formikProps.values.qrcode}
                            />
                                

                            <TouchableOpacity style={{flex:2, alignItems:'stretch'}} onPress={()=> {window.open('https://qrcodescan.in/', "_blank")}}>
                                <View style={styles.scanButtonStyle} >
                                    <Text style={{paddingHorizontal:15, paddingVertical: 10, fontSize: 18, fontWeight: 'bold', color: 'white'}}><FontAwesome name="qrcode" size={40} color="white" /></Text>
                                </View>
                            </TouchableOpacity>
                                
                        </View>
                        {formikProps.errors.qrcode?<View style={{padding: 15, borderRadius: 10, backgroundColor: 'red', marginVertical: 10}}><Text style={{color: 'white'}}>{formikProps.errors.qrcode}</Text></View>: null}


                        {/* <Modal
                            animationType="slide"
                            transparent={false}
                            visible={newModalVisible}
                            onRequestClose={() => {
                                setNewModalVisible(!newModalVisible);
                            }}
                            presentationStyle={'pageSheet'}
                            >
                            
                                <QRCodeModal 
                                    value={formikProps.values.qrcode} 
                                    setValue={formikProps.setFieldValue} 
                                    newModalVisible={newModalVisible} 
                                    setNewModalVisible={setNewModalVisible} 
                                />
                            
                        </Modal>    */}
                        
                        {showError ? <View style={styles.errmsg}><Text style={{color: 'white'}}>{state.errorMessage}</Text></View>: null}
                        <TouchableOpacity onPress={formikProps.handleSubmit}>
                            <View style={{marginVertical: 50, backgroundColor: '#6933C3', padding: 16, borderRadius: 10}}>
                                <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white', textAlign: 'center'}}><Ionicons name="checkmark-done" size={24} color="white" />SUBMIT</Text>
                            </View>
                        </TouchableOpacity >
                    </View>
                )}
            </Formik>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    headingStyle: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white'
    }, 
    subTextStyle: {
        color: 'white',
        opacity: 0.5,
        fontSize: 16,
        marginBottom: 40
    },
    questionLabelStyle: {
        color: 'white',
        opacity: 0.3, 
        fontSize: 16
    },
    questionStyle: {
        fontSize: 20,
        color: 'white'
    },
    questionView: {
        marginVertical: 20
    },
    idStyle: {
        backgroundColor:'black', 
        borderTopLeftRadius:15, 
        borderBottomLeftRadius: 15, 
        color:'white',
        fontSize: 16, 
        paddingHorizontal: 15, 
        paddingVertical: 10,
        flex: 8,
        opacity: 0.5
    },
    scanButtonStyle: {
        backgroundColor: '#743ED2', 
        alignItems: 'center', 
        borderTopRightRadius: 15, 
        borderBottomRightRadius: 15
    },
    errmsg: {
        backgroundColor: 'red',
        padding: 20,
        borderRadius: 15,
        marginVertical: 20
    }
})

export default RealQuestions