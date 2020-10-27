import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Appbar, Searchbar} from 'react-native-paper';
import Menu from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Tracks = () => {
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
        <Searchbar
          placeholder="Search for tracks"
          style={{marginHorizontal: 30}}
        />
      </Appbar.Header>
    </View>
  );
};

export default Tracks;

const styles = StyleSheet.create({});
