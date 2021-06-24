import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import {useState} from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage"
import {navigate} from '../navigationRef'


const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'signin':
            return {errorMessage: '', token: action.payload}
        case 'signout':
            return {token:null, errorMessage:''}
        default: 
            return state
    }
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
        dispatch ({type: 'signin', payload: token})
        navigate('loggedinFlow')
    } else {
        navigate('loginFlow')
    }
}

const signup = (dispatch) => {
    return async ({values, setButtonLoading})=> {
        try {
            const response = await trackerApi.post('/nitoxisignup', values)
            await setButtonLoading(false)
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({type: 'signin', payload: response.data.token})
            navigate('Intro')
        } catch (err){

            dispatch({type: 'add_error', payload: 'Oops, something went wrong.'})
            console.log(err)
            await setButtonLoading(false)

        }
    }
}

const signin = (dispatch) => {
    return async ({email, password, buttonLoading, setButtonLoading})=> {
        try {
            const response = await  trackerApi.post('/nitoxisignin', {email, password})
            await setButtonLoading(false)
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({type: 'signin', payload: response.data.token})
            navigate('loggedinFlow')
        } catch(err){
            dispatch({
                type: 'add_error',
                payload:'Invalid email or password.'
            })
            console.log('Hello', err)
            await setButtonLoading(false)
        }
    }
}

const signout = (dispatch) => {
    return async ()=> {
        await AsyncStorage.removeItem('token')
        dispatch({type:'signout'})
        navigate('loginFlow')
    }
}

export const {Provider, Context } = createDataContext(
    authReducer,
    {signup, signin, signout, tryLocalSignin},
    {token: null, errorMessage: ''}
)