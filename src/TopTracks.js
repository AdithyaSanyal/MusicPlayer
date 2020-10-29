import React, {useState,useEffect} from 'react';
import {StyleSheet, View, ScrollView, ActivityIndicator,TouchableOpacity,Text,FlatList} from 'react-native';
import {Appbar, Searchbar, Card, Title, Paragraph} from 'react-native-paper';
import Menu from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import CardTrack from '../components/CardTrack';

const TopTracks = () => {
  const [topTracks,setTopTracks]=useState([]);
  const [loading,setLoading]=useState(false)
  const navigation = useNavigation();

  const fetchData=async()=>{
    await fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=00a0a3d918b14a22e2c3d6d079383b84&format=json`,
    )
    .then((res)=>res.json())
    .then((data)=>{
      setTopTracks(data.tracks.track);
      // console.log(data.tracks.track[0].artist.name);
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
      <View style={{alignItems:'center',justifyContent:'center'}}><Text style={{color:'white',fontSize:25}}>Get Top Tracks</Text></View>
      </TouchableOpacity>
      <FlatList
        data={topTracks}
        keyExtractor={(element) => element.url.toString()}
        renderItem={({item}) => {
          return <CardTrack trackName={item.name} artistName={item.artist.name} url={item.url} />;
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
