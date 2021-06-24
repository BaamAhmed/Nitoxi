import trackerApi from '../api/tracker'
import {useState, useEffect} from 'react'

export default (token) => {
    const [pieError, setError] = useState('')
    const [pieContent, setPieContent] = useState({safe: 1, danger: 1, warning: 1})

    const findPieContent = async (token) => {
        try {
            const response = await trackerApi.post('/getpiecontent', {token})
            setPieContent(response.data)
        } catch (err) {
            setError('Something went wrong')
        }
    }
    return [findPieContent, pieContent, pieError]
}
