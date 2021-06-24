import trackerApi from '../api/tracker'
import {useState, useEffect} from 'react'

export default () => {
    const [error, setError] = useState('')
    const [recent, setRecent] = useState({})

    const findRecent = async (token) => {
        try {
            const response = await trackerApi.post('/getrecent', {token})
            setRecent(response.data)
            // console.log('smth')
            // console.log(response.data)
        } catch (err) {
            // console.log('err')
            setError('Something went wrong')
        }
    }
    return [findRecent, recent, error]
}
