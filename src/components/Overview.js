import React, { useEffect, useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import { Touchable } from 'react-native'
import {View, Text, StyleSheet} from 'react-native'
import {LineChart} from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
import useGraphContent from '../hooks/useGraphContent'
import {Context as AuthContext} from '../context/AuthContext'


const Overview = ({doRefresh, setDoRefresh, style, navigation}) => {
    const {state} = useContext(AuthContext)
    const [findGraphContent, graphContent, error] = useGraphContent()
    useEffect(()=>{findGraphContent(state.token)},[])

    let data = {}
    if(graphContent){
        data = {
           labels: [],
           datasets: [
             {
               data: graphContent,
               color: (opacity = 0.2) => `rgba(134, 65, 244, 1)`, // optional
               strokeWidth: 2 // optional
             }
           ]
         };
    } else {
        data = {
            labels: [],
            datasets: [
              {
                data: [1,1,1,1],
                color: (opacity = 0.2) => `rgba(134, 65, 244, 1)`, // optional
                strokeWidth: 2 // optional
              }
            ]
          };
    }

    if (doRefresh === true) {
        findGraphContent(state.token)
        setDoRefresh(false)
    }
    return (
        <View style={style}>
            <View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                    <Text style={styles.headingStyle}>Overview</Text>
                    <TouchableOpacity onPress={()=>{navigation.navigate('GRAPHS')}}>
                        <View style={styles.buttonStyle}>
                            <Text style={{color: 'white'}}>See More</Text>
                        </View>
                    </TouchableOpacity>
                    
                </View>
                <View style={{justifyContent: 'center', alignItems :'center'}}>
                    {graphContent?<LineChart
                        yAxisSuffix={'%'}
                        xAxisLabel={"Tests"}
                        // hidePointsAtIndex={[0,3]}
                        // yAxisInterval={"100"}
                        fromZero
                        bezier
                        data={data}
                        width={screenWidth*0.90}
                        height={220}
                        style={{borderRadius: 15, backgroundColor: '#141414', paddingTop: 20, marginBottom: -20}}
                        chartConfig={{
                            
                            backgroundColor: "#e26a00",
                            backgroundGradientFrom: "#141414",
                            backgroundGradientFromOpacity: 0,
                            backgroundGradientToOpacity: 0,
                            backgroundGradientTo: "#141414",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 0.1) => `rgba(255, 255, 255, 0.5)`,
                            labelColor: (opacity = 0.1) => `rgba(255, 255, 255, 0.5)`,
                            style: {
                            borderRadius: 10
                            },
                            propsForDots: {
                            r: "4",
                            strokeWidth: "0",
                            stroke: "#ffa726"
                            }
                        }}
                        />: <Text>Loading</Text>}
                        <Text style={{color: 'white', opacity: 0.5}}>Recent Tests</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        padding: 15
    },
    headingStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    buttonStyle: {
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        backgroundColor: '#1D1D1D'
    }
})

export default Overview