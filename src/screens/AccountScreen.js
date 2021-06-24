import React, {useContext, useEffect} from 'react'
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {Context as AuthContext} from '../context/AuthContext'
import useUserInfo from '../hooks/useUserInfo'

const AccountScreen = () => {
    const [findUser, user, error] = useUserInfo()
    const {state, signout} = useContext(AuthContext)

    useEffect(()=>{findUser(state.token)},[])

    return (
        <View style={{flex: 1, backgroundColor: '#424242', padding: 20, justifyContent: 'space-between'}}>
            <View >
                <Text style={styles.headingStyle}>Account</Text>
                <View style={{flexDirection: 'row', marginBottom: 20}}>
                    <View style={{flex: 1}}>
                        <Text style={styles.label}>FIRST NAME</Text>
                        <Text style={styles.value}>{user.firstName}</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.label}>LAST NAME</Text>
                        <Text style={styles.value}>{user.lastName}</Text>
                    </View>
                </View>



                <View style={{marginBottom: 20}}>
                    <Text style={styles.label}>EMAIL</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Text style={styles.value}>{user.email}</Text>
                    </ScrollView>
                </View>


                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <Text style={styles.label}>GENDER</Text>
                        <Text style={styles.value}>{user.gender}</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={styles.label}>AGE</Text>
                        <Text style={styles.value}>{user.age}</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={()=>{signout()}}>
                <View style={styles.logoutButton}>
                    <Text style={styles.logoutButtonLabel}>Sign Out</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headingStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 32,
        marginBottom: 10
    },
    logoutButton: {
        backgroundColor: '#292929',
        padding: 15,
        borderRadius: 10
    },
    logoutButtonLabel: {
        color: '#FB6F5A',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    label: {
        color: 'white',
        opacity: 0.7,
        fontSize: 16
    },
    value: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    }
})

export default AccountScreen