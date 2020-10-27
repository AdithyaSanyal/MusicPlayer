import React,{useState} from 'react';
import {StyleSheet, Text, View, ScrollView,ActivityIndicator,FlatList} from 'react-native';
import {Appbar, Searchbar, Card, Title} from 'react-native-paper';
import Menu from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';



const Albums = () => {
  const [a,setA]=useState([]);
  const [album,setAlbum]=useState({});
  const [text,setText]=useState('');
  const [loading,setLoading]=useState(false);
  const navigation = useNavigation();

  const fetchData= async ()=>{
    setLoading(true);
    await fetch(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${text}&api_key=00a0a3d918b14a22e2c3d6d079383b84&format=json`,)
    .then((res) => res.json())
    .then((data) => {
        for(var i=0;i<50;i++){
          // console.log(data.results['albummatches']['album'][i]['name']);
          a.push({
            album:data.results['albummatches']['album'][i]['name'],
            name:data.results['albummatches']['album'][i]['artist'],
            key:i,
          });
        }
        console.log(a);
        setA(a);
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
          placeholder="Search for albums"
          style={{marginHorizontal: 30}}
          onChangeText={(text) => setText(text)}
          onClear={empty}
          onIconPress={fetchData}
        />
      </Appbar.Header>

      {loading ? <ActivityIndicator size="large" color="black" /> : null}
      <FlatList
      data={a}
      keyExtractor={(element)=>element.key.toString()}
      renderItem={({item})=>{
        return <Text>{item.name}</Text>
        }}
      
      />


    </View>
  );
};

export default Albums;

const styles = StyleSheet.create({});
