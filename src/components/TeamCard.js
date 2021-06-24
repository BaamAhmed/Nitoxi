import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

let globalAlign

const TeamCard = ({image, name, title, align}) => {
    let rowDir
    let flexAlign
    if (true){
        rowDir = 'row'
        flexAlign = 'flex-start'
        globalAlign = 'left'
    } else {
        rowDir = 'row-reverse'
        flexAlign = 'flex-end'
        globalAlign = 'right'
    }
    return (
        <View>
            
                <View style={{flexDirection: rowDir, marginBottom: 55}}>
                    <Image style={{width: 135, height: 170, borderRadius: 10}} source={{uri:image}}/>
                    <View style={{justifyContent: 'space-between', alignItems: flexAlign}}>
                        <View>
                            <Text style={styles.headingStyle}>{name}</Text>
                        </View>
                        <View>
                            <Text style={{color: 'white', fontWeight: '200',marginHorizontal: 15 , fontSize: 20 ,marginVertical: 0, textAlign: 'left', width: 150}}>{title}</Text>
                        </View>
                    </View>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // headingStyle: {
    //     color: 'white',
    //     fontWeight: 'bold',
    //     fontSize: 32,
    //     marginVertical: 20
    // },
    headingStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 32,
        marginVertical: 20,
        textAlign: globalAlign,
        marginVertical: 0, 
        marginHorizontal: 15, 
        width: 180
    },
    paraStyle: {
        color: '#CCCCCC', 
        fontSize: 16, 
        marginBottom: 20
    }

})

export default TeamCard