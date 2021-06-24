import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import {useState, useContext} from 'react'
import {navigate} from '../navigationRef'
import {withNavigation} from 'react-navigation'
import tracker from '../api/tracker'

const testReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {testId: null, errorMessage: action.payload}
        case 'new_test':
            return {errorMessage: '', testId: action.payload}
        default:
            return state
    }
}


const new_test = (dispatch) => {
    return async ({values, token, navigation}) => {
        try {
            //all of the calculation + adding result of calculation to test + actully saving test 
            //in DB will by done on server side in one function
            //after doing all that, the server will return us the testID
            
            
            const response = await trackerApi.post('/nitoxinewtest', {values, token})
            if(!response.data.Error){
                dispatch({type: 'new_test', payload: response.data._id})
                navigation.navigate('TestShow')
                console.log('positive context route')
            } else {
                console.log(response.data.Error)
                dispatch({type: 'add_error', payload: response.data.Error})
                console.log('negative context route')
            }
        } catch (err) {
            dispatch({type: 'add_error', payload: 'Error registering test: This may be because the verification code is invalid or not all the questions were answered.'})
            navigation.navigate('TestRecord')
            // console.log('this is the error in the context: ',err)
        }
        
    }
}

const update_test = (dispatch) => {
    return async ({covidResult, testId}) => {
        try {
            const response = await trackerApi.post('/nitoxiupdatetest', {covidResult, testId})
            dispatch({type: 'new_test', payload: response.data._id})
            navigate('TestShow')
        } catch (err) {
            dispatch({type: 'add_error', payload: 'Error updating test'})
        }
    }
}

export const {Provider, Context} = createDataContext(
    testReducer,
    {new_test, update_test},
    {testId: null, errorMessage: ''}
)