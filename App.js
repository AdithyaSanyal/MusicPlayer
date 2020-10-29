import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Navigation from './Navigation/Navigator';
import SplashScreen from 'react-native-splash-screen';

const MusicPlayer = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
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
