import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Artists from '../src/Artists';
import Albums from '../src/Albums';
import Tracks from '../src/Tracks';
import TopArtists from '../src/TopArtists';
import TopAlbums from '../src/TopAlbums';
import TopTracks from '../src/TopTracks';
import Player from '../src/player';

const Drawer = createDrawerNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{backgroundColor: 'rgb(22,22,37)', width: 220}}
        drawerContentOptions={{inactiveTintColor: 'white'}}
        drawerType="slide"
        initialRouteName="Artists">
        <Drawer.Screen name="Artists" component={Artists} />
        <Drawer.Screen name="Albums" component={Albums} />
        <Drawer.Screen name="Tracks" component={Tracks} />
        <Drawer.Screen name="Top Artists" component={TopArtists} />
        <Drawer.Screen name="Top Albums" component={TopAlbums} />
        <Drawer.Screen name="Top Tracks" component={TopTracks} />
        <Drawer.Screen name="Player" component={Player} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
