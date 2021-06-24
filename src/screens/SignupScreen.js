import React, {useState, useContext, Component} from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import {Button} from 'react-native-elements'
import {Context} from '../context/AuthContext'
import { LinearGradient } from 'expo-linear-gradient';
import {Formik} from 'formik'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import GenderPicker from '../components/GenderPicker'
import * as yup from 'yup'


const signupSchema = yup.object({
    email: yup.string().email(),
    password: yup.string().required().min(6),
    firstName: yup.string().required().min(4),
    lastName: yup.string().required().min(4)
})


const SignupScreen = ({navigation})=> {
    const {state, signup} = useContext(Context)
    const [buttonLoading, setButtonLoading] = useState(false)
    const [moveUp, setMoveUp] = useState(styles.inputGroup)


    return (
        <View style={{flex:1, backgroundColor: '#552E9A'}}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#743ED2', '#3A1F69']}
                style={{flex: 1}}

            >
                <ScrollView>

                
                <View style={{marginTop: 0}}>
                    <View style={{flexDirection: 'row', justifyContent:'space-between', paddingHorizontal: 30}}>

                        <View>
                            <Text style={styles.emblem}>NITOXI</Text>
                            <Text style={styles.subHeading}>REGISTER</Text>
                        </View>
                        <MaterialCommunityIcons name="microscope" style={{marginTop: 30}} size={100} color="white" />
                    </View>
                    <View style={moveUp}>
                        {state.errorMessage ? <View style={{borderRadius: 10, backgroundColor: 'red'}}><Text style={styles.errormsg}>{state.errorMessage}</Text></View>: null}
                        <Formik
                            validationSchema={signupSchema}
                            initialValues={{email: '', password: '', firstName: '', lastName: '', gender: '', age: ''}}
                            onSubmit={(values)=>{
                                console.log(values)
                                console.log(typeof values.age)
                                setButtonLoading(true)
                                signup({values, setButtonLoading})
                            }}
                        >
                            {(formikProps)=>(
                                <View>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <TextInput
                                            onFocus={()=>{setMoveUp(styles.inputGroupFocused)}}
                                            onEndEditing={()=>{setMoveUp(styles.inputGroup)}}
                                            placeholder={'First Name'}
                                            placeholderTextColor='#736D6D'
                                            style={styles.input}
                                            value={formikProps.values.firstName}
                                            onChangeText={formikProps.handleChange('firstName')} 
                                            label="First Name" 
                                            autoCorrect={false}
                                            />
                                        <TextInput
                                            onFocus={()=>{setMoveUp(styles.inputGroupFocused)}}
                                            onEndEditing={()=>{setMoveUp(styles.inputGroup)}}
                                            placeholder={'Last Name'}
                                            placeholderTextColor='#736D6D'
                                            style={styles.input}
                                            value={formikProps.values.lastName}
                                            onChangeText={formikProps.handleChange('lastName')} 
                                            label="First Name" 
                                            autoCorrect={false}
                                            />
                                    </View>
                                    <View style={{flexDirection: 'row', marginLeft: 5}}>
                                        {formikProps.errors.firstName ? <Text style={{color: 'red', fontWeight: 'bold', flex: 1}}>{formikProps.errors.firstName}</Text>: null}
                                        {formikProps.errors.lastName ? <Text style={{color: 'red', fontWeight: 'bold', flex: 1}}>{formikProps.errors.lastName}</Text>: null}
                                    </View>

                                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    
                                    <GenderPicker
                                        value={formikProps.values.gender}
                                        setValue={formikProps.setFieldValue}
                                    />
                                    <TextInput
                                        onFocus={()=>{setMoveUp(styles.inputGroupFocused)}}
                                        onEndEditing={()=>{setMoveUp(styles.inputGroup)}}
                                        placeholder={'Age'}
                                        placeholderTextColor='#736D6D'
                                        style={styles.input}
                                        keyboardType={'number-pad'}
                                        value={formikProps.values.age}
                                        onChangeText={formikProps.handleChange('age')} 
                                        label="First Name" 
                                        autoCorrect={false}
                                    />
                                    </View>
                                    
                                    <TextInput
                                        autoCapitalize="none"
                                        keyboardType={'email-address'}
                                        onFocus={()=>{setMoveUp(styles.inputGroupFocused)}}
                                        onEndEditing={()=>{setMoveUp(styles.inputGroup)}}
                                        placeholder={'Email'}
                                        placeholderTextColor='#736D6D'
                                        style={styles.input}
                                        value={formikProps.values.email}
                                        onChangeText={formikProps.handleChange('email')} 
                                        label="First Name" 
                                        autoCorrect={false}

                                    />
                                    {formikProps.errors.email ? <Text style={{color: 'red', fontWeight: 'bold'}}>{formikProps.errors.email}</Text>: null}
                                    <TextInput
                                        autoCapitalize="none"
                                        secureTextEntry
                                        onFocus={()=>{setMoveUp(styles.inputGroupFocused)}}
                                        onEndEditing={()=>{setMoveUp(styles.inputGroup)}}
                                        placeholder={'Password'}
                                        placeholderTextColor='#736D6D'
                                        style={styles.input}
                                        value={formikProps.values.password}
                                        onChangeText={formikProps.handleChange('password')} 
                                        label="First Name" 
                                        autoCorrect={false}
                                    />
                                    {formikProps.errors.password ? <Text style={{color: 'red', fontWeight: 'bold'}}>{formikProps.errors.password}</Text>: null}

                                    <Text style={{color: 'white', fontSize: 12, marginHorizontal: 10, opacity: 0.5}}>By clicking the 'Sign Up' button, you are consenting for the provided information to be used solely to set up a Nitoxi user account.</Text>
                                    <Button containerStyle={{marginTop: 20}} titleStyle={{fontSize: 22}} buttonStyle={styles.submit} loading={buttonLoading} title="SIGN UP" onPress={formikProps.handleSubmit} />
                                </View>
                            )}
                        </Formik>
                    </View>
                    <TouchableOpacity onPress={()=> {navigation.navigate('Signin')}}>
                        <Text style={{color: '#ACAAAA', fontSize: 16, textDecorationLine:'underline', margin: 15, textAlign: 'center'}}>Already have an account? Sign in instead.</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </LinearGradient>
        </View>
    )
}

SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  }

  const styles = StyleSheet.create({
    emblem: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 50,
        letterSpacing: 8,
        marginTop: 30
        // textAlign: 'center'
    },
    subHeading: {
        color: 'white',
        fontSize: 40,
        bottom: 10
        // textAlign: 'center'
    },
    input: {
        backgroundColor: '#3B2068',
        height: 50,
        borderRadius: 10,
        color: 'white',
        paddingHorizontal: 20,
        fontSize: 18,
        marginVertical:10,
        flex: 1,
        marginHorizontal: 5
    },
    inputGroup: {
        paddingHorizontal: 25,
        marginVertical: 20,
        marginTop: 100
    },
    inputGroupFocused: {
        paddingHorizontal: 25,
        marginVertical: 20,
        marginTop: 20
    },
    submit: {
        backgroundColor: '#743ED2',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10
    },
    errormsg : {
        padding: 20,
        // backgroundColor: 'red',
        color: 'white',
    }
})

export default SignupScreen
