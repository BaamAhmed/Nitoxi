import trackerApi from '../api/tracker'
import {useState, useEffect} from 'react'

export default () => {
    const [error, setError] = useState('')
    const [user, setUser] = useState({})

    const findUser = async (token) => {
        try {
            const response = await trackerApi.post('/finduser', {token})
            setUser(response.data)
        } catch (err) {
            setError('Something went wrong')
        }
    }
    return [findUser, user, error]
}
