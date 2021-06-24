import trackerApi from '../api/tracker'
import {useState, useEffect} from 'react'

export default () => {
    const [oneTest, setOneTest] = useState({})
    const [results, setResults] = useState([])
    const [error, setError] = useState('')

    const searchApi = async (token) => {
        //this finds all test records for a given userID
        try {
            const response = await trackerApi.get(`/${token}`, {
                params: {
                    token: token
                }
            })
            setResults(response.data)
            // console.log(response.data)
        } catch (err) {
            setError('Something went wrong')
        }
    }

    const findOneTest = async(testId) => {
        try {
            const response = await trackerApi.get(`/nitoxitests/${testId}`)
            // console.log('this is the console log from the useRecord hook', response.data)
            setOneTest(response.data)
        } catch (err) {
            console.log('this is the error within the useRecord hook', err)
        }
    }
     //initial call so that page isnt blank


    return [searchApi, findOneTest, oneTest, results, error]
}
