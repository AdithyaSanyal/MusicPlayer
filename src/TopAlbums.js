import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, ActivityIndicator} from 'react-native';
import {Appbar, Searchbar, Card, Title, Paragraph} from 'react-native-paper';
import Menu from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const TopAlbums = () => {
  const navigation = useNavigation();

  
  return (
    <View style={styles.container}>
      <Appbar.Header style={{backgroundColor: 'black'}}>
        <Menu
          name="ios-menu"
          size={30}
          color="white"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </Appbar.Header>
      
    </View>
  );
};

export default TopAlbums;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
});
