import trackerApi from '../api/tracker'
import {useState, useEffect} from 'react'

export default () => {
    const [data, setData] = useState({})
    const [globalData, setGlobalData] = useState({})

    const findGlobal = async (country)=> {
        try {
            const response = await trackerApi.get(`https://covid-19-tracking.p.rapidapi.com/v1/${country}`,
            {
                headers: {
                    'x-rapidapi-key': '17dbba6358msh6ad792d0535cfdbp15aac1jsn4326dabeeb5c',
                    'x-rapidapi-host': 'covid-19-tracking.p.rapidapi.com'
                }
            })
            setData(response.data)
            // console.log(response.data)
        } catch (err) {
            console.log('smth')
            console.log(err)
        }
    }

    const findActualGlobal = async () => {
        try {
            const response = await trackerApi.get('https://covid-19-tracking.p.rapidapi.com/v1',
            {
                headers: {
                    'x-rapidapi-key': '17dbba6358msh6ad792d0535cfdbp15aac1jsn4326dabeeb5c',
                    'x-rapidapi-host': 'covid-19-tracking.p.rapidapi.com'
                }
            })
            setGlobalData(response.data[0])
        } catch (err) {
            console.log(err)
        }
    }

    return [data, findGlobal, globalData, findActualGlobal]
}
