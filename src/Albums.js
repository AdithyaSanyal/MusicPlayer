import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {Appbar, Searchbar, Card, Title} from 'react-native-paper';
import Menu from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import CardAlbum from '../components/CardAlbum';

const Albums = () => {
  const [a, setA] = useState([]);
  const [album, setAlbum] = useState([]);
  const [renderList, setRenderList] = useState(false);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const fetchData = async () => {
    setLoading(true);
    await fetch(
      `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${text}&api_key=00a0a3d918b14a22e2c3d6d079383b84&format=json`,
    )
      .then((res) => res.json())
      .then((data) => {
        setAlbum(data.results.albummatches.album);
        setLoading(false);
      });
    setText('');
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
          placeholder="Search for albums"
          style={{marginHorizontal: 30}}
          onChangeText={(text) => setText(text)}
          onIconPress={fetchData}
        />
      </Appbar.Header>

      {loading ? <ActivityIndicator size="large" color="white" /> : null}
      <FlatList
        data={album}
        keyExtractor={(element) => element.url.toString()}
        renderItem={({item}) => {
          return (
            <CardAlbum
              albumName={item.name}
              artistName={item.artist}
              imageUrl={item.image[2]['#text']}
            />
          );
          //Image:item.image[2]['#text']
          //artist:item.artist
          //musicURL=item.url
          // <Text>{item.name}</Text>
        }}
      />
    </View>
  );
};

export default Albums;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'rgb(22, 22, 37)',
  },
});
