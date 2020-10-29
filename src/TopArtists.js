import React, {useState,useEffect} from 'react';
import {
  StyleSheet, 
  View, 
  ScrollView, 
  ActivityIndicator,
  TouchableOpacity,
  Text,
  FlatList
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
import CardArtist from '../components/CardArtist';

const TopTracks = () => {
  const [topArtists,setTopArtists]=useState([]);
  const [loading,setLoading]=useState(false)
  const navigation = useNavigation();

  const fetchData=async()=>{
    await fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=00a0a3d918b14a22e2c3d6d079383b84&format=json`,
    )
    .then((res)=>res.json())
    .then((data)=>{
      setTopArtists(data.artists.artist);
      setLoading(false);
    })
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
      </Appbar.Header>
      <TouchableOpacity
      onPress={()=>{fetchData()}}
      >
      <View style={{alignItems:'center',justifyContent:'center'}}><Text style={{color:'white',fontSize:25}}>Get Top Artists</Text></View>
      </TouchableOpacity>
      <FlatList
        data={topArtists}
        keyExtractor={(element) => element.url.toString()}
        renderItem={({item}) => {
          return <CardArtist 
          artistName={item.name} 
          playcount={item.playcount} 
          listeners={item.listeners} 
          />;
        }}
      />
    </View>
  );
};

export default TopTracks;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'rgb(22, 22, 37)',
  },
});
