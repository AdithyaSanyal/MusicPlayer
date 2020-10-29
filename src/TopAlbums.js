import React, {useState} from 'react';
import {
  StyleSheet, 
  View, 
  ScrollView, 
  ActivityIndicator,
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
import CardAlbum from '../components/CardAlbum';

const TopAlbums = () => {
  const [text,setText]=useState('');
  const [topAlbum,setTopAlbum]=useState([]);
  const [loading,setLoading]=useState(false);
  const navigation = useNavigation();

  const fetchData=async()=>{
      setLoading(true);
      await fetch(`http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=${text}&api_key=00a0a3d918b14a22e2c3d6d079383b84&format=json`,
      )
      .then((res)=>res.json())
      .then((data)=>{
          setTopAlbum(data.albums.album);
          console.log(data.albums.album);
          setLoading(false);
      });
  };

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
          onIconPress={fetchData}
        />
      </Appbar.Header>
      {loading ? <ActivityIndicator size="large" color="white" /> : null}
      <FlatList
        data={topAlbum}
        keyExtractor={(element) => element.image[2]['#text'].toString()}
        renderItem={({item}) => {
          return (
            <CardAlbum
              url={item.url}
              albumName={item.name}
              artistName={item.artist.name}
              imageUrl={item.image[2]['#text']}
            />
          );
        }}
      />
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
