import React from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import GlobalModule from '../components/GlobalModule'
import StatsModule from '../components/StatsModule'


const StatsScreen = () => {
    return (
        <View style={{height: 600, backgroundColor: '#424242', paddingHorizontal: 20}}>
            <ScrollView showsVerticalScrollIndicator={false} style={{paddingVertical: 20, height: 400}}>

            
                <Text style={styles.headingStyle}>Statistics</Text>
                <Text style={{color: 'white', opacity: 0.5, marginVertical: 10, backgroundColor: '#424242', borderRadius: 15}}>All the following stats are fetched from the WorldBank API</Text>

                <GlobalModule/>
                <StatsModule country={'Pakistan'}/>
                <StatsModule country={'Canada'}/>
                <StatsModule country={'USA'}/>
                {/* <StatsModule country={'India'}/> */}
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

export default StatsScreen