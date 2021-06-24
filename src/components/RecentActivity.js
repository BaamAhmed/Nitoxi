import React, {useContext, useEffect} from 'react'
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import {LineChart, ProgressChart} from 'react-native-chart-kit'
import {Context as AuthContext} from '../context/AuthContext'
// import { withNavigation } from "react-navigation"
import useGetRecent from '../hooks/useGetRecent'

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height

const RecentActivity = ({doRefresh, setDoRefresh, navigation}) => {
    const {state, signout} = useContext(AuthContext)

    const [findRecent, recent, error] = useGetRecent()
    useEffect(()=>{findRecent(state.token)},[])

    if(doRefresh===true){
        findRecent(state.token)
        setDoRefresh(false)
    }

    let perc
    if(recent.percentage){
        perc = recent.percentage
    } else {
        perc = 1
    }
    
    return(
        <View style={styles.viewStyle}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center'}}>
                <Text style={styles.headingStyle}>Recent Activity</Text>
                
                <TouchableOpacity onPress={()=> {navigation.navigate('TestShow',{param: recent._id})}}>
                    <View style={{borderRadius: 10, backgroundColor: '#121212'}}>
                        <Text style={styles.buttonStyle}>Details</Text>
                    </View>
                </TouchableOpacity>
                
            </View>
            <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    {recent? <Text style={styles.percentageStyle}>{recent.percentage}%</Text>: null}
                    {recent ? <ProgressChart
                        data={{
                            labels: ["Positive"],
                            data: [perc/100]
                        }}
                        width={screenWidth * 0.4}
                        height={screenHeight * 0.23}
                        strokeWidth={22}
                        radius={screenWidth * 0.17}
                        chartConfig={{
                            backgroundGradientFrom: "#1E2923",
                            backgroundGradientFromOpacity: 0,
                            backgroundGradientTo: "#08130D",
                            backgroundGradientToOpacity: 0,
                            color: (opacity = 1) => `rgba(164, 85, 224, ${opacity})`,
                            strokeWidth: 4, // optional, default 3
                            barPercentage: 1,
                            useShadowColorFromDataset: false // optional
                        }}
                        hideLegend={true}
                        
                    />: <Text>Loading</Text>}

                </View>
                <View>
                    <Text style={styles.captionStyle}>Probability of being positive</Text>
                    <Text style={styles.lastTestedStyle}>Last tested on</Text>
                    {recent ? <Text style={{color: 'white', textAlign: 'right'}}>{recent.testDay}, {recent.testDate}</Text>: <Text>Loading</Text>}
                    <View style={{borderRadius: 10, backgroundColor: '#121212', alignSelf: 'flex-end', marginTop: 20}}>
                        <TouchableOpacity onPress={()=> navigation.navigate("TestRecord")}>
                            <Text style={styles.buttonStyle} > View Test Record</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#292929',
        // height: screenHeight * 0.34,
        borderRadius: 15,
        marginTop: 10,
        padding: 15
    },
    headingStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    },
    percentageStyle: {
        position: 'absolute',
        // top: screenHeight * 0.1, 
        // left: screenWidth * 0.15,
        fontWeight: 'bold',
        color: '#a455e0',
        fontSize: 30
    },
    buttonStyle: {
        color: 'white',
        padding: 10,
        borderRadius: 3
    },
    captionStyle: {
        fontWeight: 'bold',
        width: screenWidth* 0.35,
        textAlign: 'right',
        alignSelf: 'flex-end',
        marginTop: screenHeight * 0.025,
        color:"#a455e0"
    },
    lastTestedStyle: {
        fontWeight: 'bold',
        width: screenWidth* 0.35,
        textAlign: 'right',
        alignSelf: 'flex-end',
        marginTop: screenHeight * 0.03,
        marginBottom: screenHeight * 0.01,
        color:"white"
    }
})

export default RecentActivity