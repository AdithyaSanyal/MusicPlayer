import React,{useState} from 'react';
import {StyleSheet, Text, View, ScrollView,ActivityIndicator,FlatList} from 'react-native';
import {Appbar, Searchbar, Card, Title} from 'react-native-paper';
import Menu from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import { WebView } from 'react-native-webview';
function player({route}) {
    const url = route.params.url;

    return (
         <View style={styles.conatiner}>
         <WebView source={{ uri: url }} />
       </View> 
    //      <WebView
    //      originWhitelist={['*']}
    //      source={{ html: `<iFrame height=1000 width=1000 src='${url}' />` }}
    //    />
       
   
       
    )
}
const styles = StyleSheet.create({
  conatiner: {
    flex: 1
  }
});
export default player
