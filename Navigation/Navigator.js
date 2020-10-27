import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Artists from '../src/Artists';
import Albums from '../src/Albums';
import Tracks from '../src/Tracks';
import TopArtists from '../src/TopArtists';
import TopAlbums from '../src/TopAlbums';
import TopTracks from '../src/TopTracks';

const Drawer = createDrawerNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Artists">
        <Drawer.Screen name="Artists" component={Artists} />
        <Drawer.Screen name="Albums" component={Albums} />
        <Drawer.Screen name="Tracks" component={Tracks} />
        <Drawer.Screen name="Top Artists" component={TopArtists} />
        <Drawer.Screen name="Top Albums" component={TopAlbums} />
        <Drawer.Screen name="Top Tracks" component={TopTracks} /> 
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
