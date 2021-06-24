import React, {useState, useEffect, useContext} from 'react'
import {View, Text, StyleSheet, Dimensions, Modal, TouchableOpacity, ScrollView, RefreshControl} from 'react-native'
import RecentActivity from "../components/RecentActivity"
import NationalStats from "../components/NationalStats"
import GlobalStats from "../components/GlobalStats"
import IndividualStats from "../components/IndividualStats"
import Overview from "../components/Overview"
import GetTested from "../components/GetTested"
import useGetRecent from '../hooks/useGetRecent'
import {Context as AuthContext} from '../context/AuthContext'

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height


const DashPage = ({navigation}) => {
    const {state, signout} = useContext(AuthContext)

    const [findRecent, recent, error] = useGetRecent()
    useEffect(()=>{findRecent(state.token)},[])
    const [doRefresh, setDoRefresh] = useState(false)


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
      }
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setDoRefresh(true)
        wait(1000).then(() => setRefreshing(false));
      }, []);

    const [refreshing, setRefreshing] = useState(false)
    return (
        <View style={styles.viewStyle}>
            <ScrollView 
                refreshControl={
                    <RefreshControl
                        enabled={true}
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                style={{paddingHorizontal: 5, height: screenHeight-150}}>
                
                <RecentActivity doRefresh={doRefresh} setDoRefresh={setDoRefresh} navigation={navigation}/>
                
                {/* <Text style={{color: 'white', opacity: 0.5, margin: 10, marginBottom: 0, backgroundColor: '#424242', borderRadius: 15}}>All the following stats are fetched from the WorldBank API</Text> */}
                {/* <NationalStats style={styles.statsStripStyle}/>
                    
               
                <GlobalStats style={styles.statsStripStyle}/> */}
                    {/* <View style={styles.statsStyle}>
                    </View> */}
                    
                
                
                <Overview doRefresh={doRefresh} setDoRefresh={setDoRefresh} navigation={navigation} style={styles.graphStyle}/>
                

            </ScrollView>
            <View style={styles.getTestedStyle}>
                <GetTested authState={state} navigation={navigation}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        // borderWidth: 3,
        // borderColor: "red",
        // paddingVertical: screenHeight * 0.015,
        // paddingHorizontal: screenWidth * 0.022,
        // flex: 1,
        height: screenHeight- 80,
        // backgroundColor: '#424242',
        backgroundColor: '#424242',
        justifyContent: 'space-around'
    },
    recentActivityStyle: {
        
        // flex: 3,
    },
    statsStripStyle: {
        // height: 135,
        // flex: 2,
        alignItems: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        backgroundColor: '#292929',
        borderRadius: 15

    },
    graphStyle: {
        // height: screenHeight * 0.20,
        // flex: 2,
        // alignItems: 'stretch',
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        backgroundColor: '#292929',
        borderRadius: 15,
        marginTop: 10,
        padding: 15

    },
    statsStyle: {
        // width: screenWidth * 0.464,
        backgroundColor: '#292929',
        borderRadius: 15,
        
    },
    getTestedStyle: {
        // flex: 1,
        // bottom: 15,
        // width: screenWidth,
        // position: 'absolute',
        margin: 3,
        alignSelf: 'stretch'
    }
})

export default DashPage

