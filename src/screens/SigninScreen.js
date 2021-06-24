import React, {useState, useContext, useEffect} from 'react'
import {View, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import {Text, Input, Button} from 'react-native-elements'
import {Context} from '../context/AuthContext'
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SigninScreen = ({navigation})=> {
    const {state, signin, tryLocalSignin} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [buttonLoading, setButtonLoading] = useState(false)
    const [moveUp, setMoveUp] = useState(false)

    useEffect(() => {
        tryLocalSignin()
    }, [])

    return (
        <View style={{flex:1, backgroundColor: '#552E9A'}}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#743ED2', '#3A1F69']}
                style={{flex: 1}}

            >
                <View style={{marginTop: 70}}>
                    {moveUp ? null: <MaterialCommunityIcons name="microscope" style={styles.iconUnfocused} size={130} color="white" /> }
                    <Text style={styles.emblem}>NITOXI</Text>
                    <Text style={styles.subHeading}>LOGIN</Text>
                    <View style={styles.inputGroup}>
                        {state.errorMessage ? <View style={{borderRadius: 10, backgroundColor: 'red'}}><Text style={styles.errormsg}>{state.errorMessage}</Text></View>: null}
                        <TextInput
                            onFocus={()=>{setMoveUp(true)}}
                            onEndEditing={()=>{setMoveUp(false)}}
                            placeholder={'email'}
                            placeholderTextColor='#736D6D'
                            style={styles.input}
                            onChangeText={setEmail}
                            label="Email" 
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                            />
                        <TextInput
                            onFocus={()=>{setMoveUp(true)}}
                            onEndEditing={()=>{setMoveUp(false)}}
                            placeholder={'password'}
                            placeholderTextColor='#736D6D'
                            style={styles.input}
                            onChangeText={setPassword} 
                            label="Password" 
                            textContentType="password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry
                            />
                        <Button containerStyle={{marginTop: 20}} titleStyle={{fontSize: 22}} buttonStyle={styles.submit} loading={buttonLoading} title="SIGN IN" onPress={()=>{
                            signin({email, password, buttonLoading, setButtonLoading})
                            setButtonLoading(true)
                        }} />
                    </View>
                    <TouchableOpacity onPress={()=> {navigation.navigate('Signup')}}>
                        <Text style={{color: '#ACAAAA', fontSize: 16, textDecorationLine:'underline', margin: 15, textAlign: 'center'}}>Don't have an account? Sign up instead.</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    )
}

SigninScreen.navigationOptions = () => {
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
        textAlign: 'center'
    },
    subHeading: {
        color: 'white',
        fontSize: 40,
        textAlign: 'center'
    },
    input: {
        backgroundColor: '#3B2068',
        height: 50,
        borderRadius: 10,
        color: 'white',
        paddingHorizontal: 20,
        fontSize: 18,
        marginVertical:10
    },
    inputGroup: {
        paddingHorizontal: 30,
        marginVertical: 20
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
    },
    iconUnfocused: {
        textAlign: 'center', 
        marginBottom: 20
    }
})

export default SigninScreen
