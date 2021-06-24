import React, {useContext, useState, useEffect} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import {LineChart, BarChart, PieChart} from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
import useGraphContent from '../hooks/useGraphContent'
import usePieContent from '../hooks/usePieContent'
import {Context as AuthContext} from '../context/AuthContext'
// import { RESULTS } from 'react-native-permissions';

const screenHeight = Dimensions.get("window").height


const GraphScreen = () => {
    const {state} = useContext(AuthContext)
    const [findGraphContent, graphContent, pieError] = useGraphContent()
    const [findPieContent, pieContent, error] = usePieContent()
    useEffect(()=>{findGraphContent(state.token)},[])
    useEffect(()=> {findPieContent(state.token)},[])

    let data ={}
    if (graphContent){
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
     

    let pieData = []
    if (pieContent){
      pieData = [
        {
          name: "Good to go",
          population: pieContent.safe,
          color: "#7FD068",
          legendFontColor: "#7FD068",
          legendFontSize: 14
        },
        {
          name: "Get Tested",
          population: pieContent.warning,
          color: "#FB6F5A",
          legendFontColor: "#FB6F5A",
          legendFontSize: 15
        },
        {
          name: "Take Precations",
          population: pieContent.danger,
          color: "#DFA348",
          legendFontColor: "#DFA348",
          legendFontSize: 15
        }
    ]

    } else {
      pieData = [
        {
          name: "Good to go",
          population: 1,
          color: "#7FD068",
          legendFontColor: "#7FD068",
          legendFontSize: 14
        },
        {
          name: "Get Tested",
          population: 1,
          color: "#FB6F5A",
          legendFontColor: "#FB6F5A",
          legendFontSize: 15
        },
        {
          name: "Take Precations",
          population: 1,
          color: "#DFA348",
          legendFontColor: "#DFA348",
          legendFontSize: 15
        }
    ]
    }
      

    return (
        <View style={{flex: 1, backgroundColor: '#424242', paddingHorizontal: 20}}>
            <ScrollView showsVerticalScrollIndicator={false} style={{paddingVertical: 20, height: screenHeight - 100}}>

            <Text style={styles.headingStyle}>Graphs</Text>
            <View style={{justifyContent: 'center', alignItems :'center', marginBottom: 20}}>
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
            <View style={{marginBottom: 20}}>
            {graphContent?<BarChart
                                // style={graphStyle}
                                
                                style={{borderRadius: 15, backgroundColor: '#141414', paddingTop: 20}}
                                showValuesOnTopOfBars={true}
                                data={data}
                                width={screenWidth*0.90}
                                height={220}
                                yAxisSuffix="%"
                                chartConfig={{
                            
                                    backgroundColor: "#e26a00",
                                    backgroundGradientFrom: "#141414",
                                    backgroundGradientFromOpacity: 0,
                                    backgroundGradientToOpacity: 0,
                                    backgroundGradientTo: "#141414",
                                    decimalPlaces: 2, // optional, defaults to 2dp
                                    color: (opacity = 0.1) => `rgba(255, 255, 255, 0.5)`,
                                    labelColor: (opacity = 0.1) => `rgba(255, 255, 255, 1)`,
                                    style: {
                                    borderRadius: 10
                                    },
                                    propsForDots: {
                                    r: "4",
                                    strokeWidth: "0",
                                    stroke: "#ffa726"
                                    }
                                }}
                                verticalLabelRotation={30}
                            />: <Text>Loading</Text>}
            </View>
            <View style={{marginBottom: 100, justifyContent: 'space-between', backgroundColor: '#141414', height: 260, borderRadius: 15}}>
            {pieContent? <PieChart
                style={{borderRadius: 15, backgroundColor: '#141414', paddingTop: 20, marginBottom: -20, alignSelf: 'center'}}
                data={pieData}
                width={190}
                height={220}
                chartConfig={{
                            
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "red",
                    backgroundGradientFromOpacity: 1,
                    backgroundGradientToOpacity: 1,
                    backgroundGradientTo: "green",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 0.1) => `rgba(255, 255, 255, 0.5)`,
                    labelColor: (opacity = 0.1) => `rgba(255, 255, 255, 1)`,
                    style: {
                    borderRadius: 10
                    },
                    propsForDots: {
                    r: "4",
                    strokeWidth: "0",
                    stroke: "#ffa726"
                    }
                }}
                hasLegend={false}
                accessor={"population"}
                backgroundColor={"transparent"}
                // paddingLeft={"15"}
                center={[45, -20]}
                
            />: <Text>Loading</Text>}
            <View style={{flexDirection: 'row', justifyContent: 'space-around', margin: 10}}>
                <Text style={{color: '#7FD068', fontWeight: 'bold'}}>HEALTHY</Text>
                <Text style={{color: '#DFA348', fontWeight: 'bold'}}>TAKE PRECAUTIONS</Text>
                <Text style={{color: '#FB6F5A', fontWeight: 'bold'}}>GET TESTED</Text>
            </View>
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 32,
        marginBottom: 10
    }
})

export default GraphScreen