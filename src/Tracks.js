import React,{useState} from 'react';
import {StyleSheet, Text, View, ScrollView,ActivityIndicator,FlatList} from 'react-native';
import {Appbar, Searchbar, Card, Title} from 'react-native-paper';
import Menu from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';



const Tracks = () => {
  const [arr,setA]=useState([]);
  const [track,setTrack]=useState({});
  const [text,setText]=useState('');
  const [loading,setLoading]=useState(false);
  const navigation = useNavigation();

  const fetchData= async ()=>{
    setLoading(true);
    await fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${text}&api_key=00a0a3d918b14a22e2c3d6d079383b84&format=json`,)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data.results['trackmatches']['track'][0]['name']);
        for(var i=0;i<10;i++){
          console.log(data.results['trackmatches']['track'][1]['artist']);
          arr.push({
            track:data.results['trackmatches']['track'][i]['name'],
            artist:data.results['trackmatches']['track'][i]['artist'],
            key:i,
          });
        }
        console.log(arr);
        setA(arr);
        setLoading(false);
        setText('');
      });
  }

  const empty=()=>{
    setA([]);
  }


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
          placeholder="Search for tracks"
          style={{marginHorizontal: 30}}
          onChangeText={(text) => setText(text)}
          onClear={empty}
          onIconPress={fetchData}
        />
      </Appbar.Header>

      {loading ? <ActivityIndicator size="large" color="black" /> : null}
      <FlatList
      data={arr}
      keyExtractor={(element)=>element.key.toString()}
      renderItem={({item})=>{
        return <Text>{item.artist}</Text>
        }}
      
      />


    </View>
  );
};

export default Tracks;

const styles = StyleSheet.create({});
