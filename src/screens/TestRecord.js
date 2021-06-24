import React, {useContext, useEffect, useState} from 'react'
import useRecord from "../hooks/useRecord"
import {Context as AuthContext} from '../context/AuthContext'
import TestListItem from '../components/TestListItem'

import {View, Text, StyleSheet, FlatList, RefreshControl, Dimensions} from 'react-native'
import { TouchableOpacity } from 'react-native'

const screenHeight = Dimensions.get('window').height


const TestRecord = ({navigation}) => {
    const [searchApi, findOneTest, oneTest, results, error] = useRecord()
    const {state} = useContext(AuthContext)
    useEffect(()=>{
        searchApi(state.token)
       
    }, [])

    const [doRefresh, setDoRefresh] = useState(false)
    const [refreshing, setRefreshing] = useState(false)


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
      }
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        searchApi(state.token)
        wait(1000).then(() => setRefreshing(false));
      }, []);
    

    return (    
        <View style={{height: screenHeight, backgroundColor: '#424242', padding: 20, paddingBottom: 0}}>
            <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center'}}>
                <Text style={styles.headingStyle}>All Tests</Text>
                {/* <TouchableOpacity onPress={()=>{searchApi(state.token)}}>
                    <View style={{padding: 10 ,backgroundColor: '#1D1D1D', borderRadius: 10}}>
                        <Text style={{color: 'white'}}>Refresh</Text>
                    </View>
                </TouchableOpacity> */}
            </View>
            {results[0] ? <FlatList
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            enabled={true}
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                    data={results}
                    style={{height: screenHeight}}
                    keyExtractor={(item)=>{Math.random().toString()}}
                    renderItem={({item})=>{
                        return (
                            <TestListItem item={item} navigation={navigation}/>
                                    ) 
                                }
                            } 
                            />: <Text style={{color: 'white', fontSize: 18, textAlign: 'center'}}>Loading...</Text>}
            <View style={{flex: 1}}></View>
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

export default TestRecord