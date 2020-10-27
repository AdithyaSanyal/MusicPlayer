import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Artists from '../src/Artists';
import Albums from '../src/Albums';
import Tracks from '../src/Tracks';

const Drawer = createDrawerNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Artists">
        <Drawer.Screen name="Artists" component={Artists} />
        <Drawer.Screen name="Albums" component={Albums} />
        <Drawer.Screen name="Tracks" component={Tracks} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
