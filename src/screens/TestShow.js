import React, {useContext, useEffect, useState} from 'react'
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native'
import useRecord from "../hooks/useRecord"
import {Context as TestContext} from '../context/testContext'
import {ProgressChart} from 'react-native-chart-kit'
import Responses from '../components/Responses'
import PositiveVer from '../components/PositiveVer'
import NegativeVer from '../components/NegativeVer'
import { TouchableOpacity } from 'react-native-gesture-handler'
const screenHeight = Dimensions.get("window").height


const TestShow = ({navigation}) => {
    const [show, setShow] = useState(false)
    const [searchApi, findOneTest, oneTest, results, error] = useRecord()
    const {state} = useContext(TestContext)
    if (navigation.getParam('param') === '' || navigation.getParam('param') === undefined){
        useEffect(()=>{
            findOneTest(state.testId)
        }, [])
        
    } else {
        useEffect(()=>{
            findOneTest(navigation.getParam('param'))
        }, [])
    }
    
    

    let heading
    let headingStyle
    let supportingPara
    let color
    let centerPercentStyle
    if (oneTest.percentage < 10){
        color = '127, 208, 104'
        centerPercentStyle = styles.centerPercentStyleGreen
        headingStyle = styles.headingStyleGreen
        heading = "You're good to go"
        supportingPara = "According to our algorithm and the responses that you submitted for this test, you generally seem to be healthy and safe. That being said, please avoid busy locations, maintain social distance, and wear a mask to minimize contraction."
    } else if (oneTest.percentage < 60) {
        centerPercentStyle = styles.centerPercentStyleYellow
        color = '223, 163, 72'
        headingStyle = styles.headingStyleYellow
        heading = 'Take precautions'
        supportingPara = "According to our algorithm and the responses that you submitted for this test, you seem to be not immediately at risk, however there are high chances of you contracting the sickness in the near future unless all necessary precautions are taken."
    } else {
        centerPercentStyle = styles.centerPercentStyleRed
        headingStyle = styles.headingStyleRed
        color = '251, 111, 90'    
        heading = 'Get tested, please'
        supportingPara = "According to our algorithm and the responses that you submitted for this test, you seem to be at a high risk of contraction. Please get an official test done to confirm, and follow all precautionary measures"
    }

    return (
        <View style={{flex: 1, backgroundColor: '#424242', paddingHorizontal: 20}}>
            <ScrollView showsVerticalScrollIndicator={false} style={{paddingTop: 10, height: screenHeight-100}}>


                <View style={styles.containerStyleRow}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('TestRecord')}}>
                        <View style={{backgroundColor: '#1D1D1D', padding: 10, borderRadius: 7}}>
                            <Text style={{color: 'white'}}>Go Back</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.dayStyle}>{oneTest.testDay}</Text>
                        <Text style={styles.dateStyle}>{oneTest.testDate}</Text>
                    </View>
                </View>


                <View style={styles.containerStyle}>
                    
                        
                    {oneTest.percentage ? 
                    <View style={{flexDirection: 'row',alignItems: 'center', justifyContent: 'center', paddingVertical: 10}}>
                        <Text style={centerPercentStyle}>{oneTest.percentage}%</Text>
                        <ProgressChart
                            data={{
                                labels: ["Positive"],
                                data: [oneTest.percentage/100]
                            }}
                            width={300}
                            height={300}
                            strokeWidth={40}
                            radius={130}
                            chartConfig={{
                                backgroundGradientFrom: "#1E2923",
                                backgroundGradientFromOpacity: 0,
                                backgroundGradientTo: "#08130D",
                                backgroundGradientToOpacity: 0,
                                color: (opacity = 1) => `rgba(${color}, ${opacity})`,
                                strokeWidth: 4, // optional, default 3
                                barPercentage: 1,
                                useShadowColorFromDataset: false // optional
                            }}
                            hideLegend={true}
                            // style={{backgroundColor: 'black'}}
                        /> 
                    </View>
                    
                    : <Text style={{color: 'white', fontSize: 18, textAlign: 'center'}}>Loading...</Text>}
                        
                    
                </View>
                <View style={styles.containerStyle}>
                    <Text style={headingStyle}>{heading}</Text>
                    <Text style={styles.supportingParaStyle}>{supportingPara}</Text>
                </View>
                <View style={styles.containerStyle}>
                    <Text style={{color: 'white',fontWeight: 'bold',fontSize: 23, marginBottom: 10}}>Verification</Text>
                    {show  ? <PositiveVer/>: <NegativeVer show={show} setShow={setShow} navigation={navigation} item={oneTest}/>}
                </View>
                <View style={styles.containerStyle}>
                    <Responses item={oneTest} />
                </View>
                
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#292929',
        padding: 20,
        borderRadius: 15,
        justifyContent: 'space-between',
        marginVertical: 10,
        // height: 200
    },
    containerStyleRow: {
        backgroundColor: '#292929',
        padding: 10,
        paddingRight: 20,
        borderRadius: 15,
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginVertical: 10,
        alignItems: 'center'
    },
    dayStyle: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'right',
        marginRight: 7
    },
    dateStyle: {
        color: '#767578',
        fontSize: 22,
        textAlign: 'right'
    },
    headingStyleRed: {
        color: '#FB6F5A',
        fontWeight: 'bold',
        fontSize: 32
    },
    headingStyleYellow: {
        color: '#DFA348',
        fontWeight: 'bold',
        fontSize: 32
    },
    headingStyleGreen: {
        color: '#7FD068',
        fontWeight: 'bold',
        fontSize: 32
    },
    centerPercentStyleRed: {
        fontWeight: 'bold',
        fontSize: 50,
        color: '#FB6F5A',
        position: 'absolute'
    },
    centerPercentStyleYellow: {
        fontWeight: 'bold',
        fontSize: 50,
        color: '#DFA348',
        position: 'absolute'
    },
    centerPercentStyleGreen: {
        fontWeight: 'bold',
        fontSize: 50,
        color: '#7FD068',
        position: 'absolute'
    },
    supportingParaStyle: {
        marginTop: 10,
        color: '#A6A6A6',
        fontSize: 17
    }
})

export default TestShow