import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, ActivityIndicator} from 'react-native';
import {Appbar, Searchbar, Card, Title, Paragraph} from 'react-native-paper';
import Menu from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const TopAlbums = () => {
  const [text,setText]=useState('');
  const navigation = useNavigation();

  const fetchData=()=>{

  }

  return (
    <View style={styles.container}>
      <Appbar.Header style={{backgroundColor: '#1e1e30'}}>
        <Menu
          name="ios-menu"
          size={30}
          color="white"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
        <Searchbar
          placeholder="Enter desired genre"
          style={{marginHorizontal: 30}}
          onChangeText={(text) => setText(text)}
          // onIconPress={fetchData}
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
    backgroundColor: 'rgb(22, 22, 37)',
  },
});
