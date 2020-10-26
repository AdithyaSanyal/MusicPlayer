import React from 'react';
import {Text,View,StyleSheet,Image,TouchableOpacity} from 'react-native';

const Card=(props)=>{
    return(
        <View style={{flexDirection:'row',margin:10,marginBottom:0}}>
        <View style={{paddingLeft:5}}>
        <Text
        style={{fontSize:15,width:'100%'}}
        ellipsizeMode="tail"
        numberOfLines={3}
        >
        {props.name}</Text>
        </View>
        </View>
    )
}

export default Card;