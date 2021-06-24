import trackerApi from '../api/tracker'
import {useState, useEffect} from 'react'

export default () => {
    const [error, setError] = useState('')
    const [graphContent, setGraphContent] = useState([1,1,1,1])

    const findGraphContent = async (token) => {
        try {
            const response = await trackerApi.post('/getgraphcontent', {token})
            setGraphContent(response.data)
        } catch (err) {
            setError('Something went wrong')
        }
    }
    return [findGraphContent, graphContent, error]
}
