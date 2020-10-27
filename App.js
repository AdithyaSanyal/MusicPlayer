import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Navigation from './Navigation/Navigator';

const MusicPlayer = () => {
  /* useEffect(()=>{
      fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=00a0a3d918b14a22e2c3d6d079383b84&format=json`)
      .then(response=>{
          if(response.ok){
              return response.json();
              console.log(response.json());
          }
          throw new Error('An error has occured');
      })
      .then(data=>setData(data))
      .catch(()=>
      setData({error:'An error has occured!!'})
      );
  },
  []); */

  return <Navigation />;
};

const styles = StyleSheet.create({
  textinput: {
    width: '75%',
    backgroundColor: '#b4b6d6',
    borderRadius: 25,
  },
});

export default MusicPlayer;
