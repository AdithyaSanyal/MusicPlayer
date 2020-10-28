import React, {useState} from 'react';
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
import CardTrack from '../components/CardTrack';

const Tracks = () => {
  const [arr, setA] = useState([]);
  const [track, setTrack] = useState([]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const fetchData = async () => {
    setLoading(true);
    await fetch(
      `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${text}&api_key=00a0a3d918b14a22e2c3d6d079383b84&format=json`,
    )
      .then((res) => res.json())
      .then((data) => {
        setTrack(data.results.trackmatches.track);
        // console.log(track);
        setLoading(false);
        setText('');
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
          placeholder="Search for tracks"
          style={{marginHorizontal: 30}}
          onChangeText={(text) => setText(text)}
          onIconPress={fetchData}
        />
      </Appbar.Header>

      {loading ? <ActivityIndicator size="large" color="grey" /> : null}
      <FlatList
        data={track}
        keyExtractor={(element) => element.url.toString()}
        renderItem={({item}) => {
          return <CardTrack trackName={item.name} artistName={item.artist} />;
          //name:item.name
          //musicURL:item.url
          //listeners:item.listeners
          //image:item.image[2]['#text']
        }}
      />
    </View>
  );
};

export default Tracks;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'rgb(22, 22, 37)',
  },
});
