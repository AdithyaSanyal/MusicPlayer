import React, {useState} from 'react';
import {
  StyleSheet, 
  View, 
  ScrollView, 
  ActivityIndicator
} from 'react-native';
import {
  Appbar, 
  Searchbar, 
  Card, 
  Title, 
  Paragraph
} from 'react-native-paper';
import Menu from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import { WebView } from 'react-native-webview';

const Player = (props) => {
  const navigation = useNavigation();
  const url=props.route.params.url;
  console.log(props.route.params.url);

  return (
    <WebView source={{ uri: url }} />
  );
};

export default Player;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
});