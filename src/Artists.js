import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, ActivityIndicator} from 'react-native';
import {Appbar, Searchbar, Card, Title, Paragraph} from 'react-native-paper';
import Menu from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Artists = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [artist, setArtist] = useState('');
  const [pic, setPic] = useState('');
  const [listener, setListener] = useState('');
  const [playcount, setPlaycount] = useState('');
  const [summary, setSummary] = useState('');

  const navigation = useNavigation();

  const fetchData = async () => {
    setLoading(true);
    await fetch(
      `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${text}&api_key=00a0a3d918b14a22e2c3d6d079383b84&format=json`,
    )
      .then((res) => res.json())
      .then((data) => {
        setArtist(data.artist['name']);
        setPic(data.artist.image[2]['#text']);
        setListener(data.artist['stats']['listeners']);
        setPlaycount(data.artist['stats']['playcount']);
        setSummary(data.artist['bio']['content']);
        setLoading(false);
        setText('');
      });
  };

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
          placeholder="Search for artists"
          style={{marginHorizontal: 30}}
          value={text}
          onChangeText={(text) => setText(text)}
          onIconPress={fetchData}
        />
      </Appbar.Header>
      <ScrollView>
        {loading ? <ActivityIndicator size="large" color="black" /> : null}
        <Card style={{margin: 30, elevation: 5}}>
          <Card.Content>
            <Title>Artist Name : {artist}</Title>
            <Title>Number of Listeners : {listener}</Title>
            <Title>Total PlayCount : {playcount}</Title>
            <Title>About {artist}:</Title>
            <Paragraph style={{fontSize: 16}}>{summary}</Paragraph>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
};

export default Artists;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
});
