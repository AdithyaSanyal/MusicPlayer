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
          placeholder="Search for artists"
          style={{marginHorizontal: 30}}
          value={text}
          onChangeText={(text) => setText(text)}
          onIconPress={fetchData}
        />
      </Appbar.Header>
      <ScrollView>
        {loading ? <ActivityIndicator size="large" color="white" /> : null}
        {artist == '' ? null : (
          <Card
            style={{
              margin: 30,
              elevation: 5,
              backgroundColor: 'rgba(22,22,37,0)',
            }}>
            <Card.Content>
              <Title style={styles.data}>Artist Name : {artist}</Title>
              <Title style={styles.data}>
                Number of Listeners : {listener}
              </Title>
              <Title style={styles.data}>Total PlayCount : {playcount}</Title>
              <Title style={styles.data}>About {artist}:</Title>
              <Paragraph style={{...styles.data, fontSize: 16}}>
                {summary}
              </Paragraph>
            </Card.Content>
          </Card>
        )}
      </ScrollView>
    </View>
  );
};

export default Artists;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'rgb(22, 22, 37)',
  },
  data: {
    color: 'white',
  },
});
