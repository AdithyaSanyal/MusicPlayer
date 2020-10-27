import React,{useState,useEffect} from 'react';
import {Text,View,ScrollView,StyleSheet,TextInput,ActivityIndicator,FlatList,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from './src/Card';

const apiKey='00a0a3d918b14a22e2c3d6d079383b84';

const MusicPlayer=({userName,apiKey})=>{
  const [Data,setData]=useState({});
  const [text,setText]=useState('');
  const [loading,setLoading]=useState(false);
  const [artist,setArtist]=useState('');
  const [pic,setPic]=useState('');
  const [listener,setListener]=useState('');
  const [playcount,setPlaycount]=useState('');
  const [summary,setSummary]=useState('');

  // useEffect(()=>{
  //     fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=00a0a3d918b14a22e2c3d6d079383b84&format=json`)
  //     .then(response=>{
  //         if(response.ok){
  //             return response.json();
  //             console.log(response.json());
  //         }
  //         throw new Error('An error has occured');
  //     })
  //     .then(data=>setData(data))
  //     .catch(()=>
  //     setData({error:'An error has occured!!'})
  //     );
  // },
  // []);

  const fetchData=async ()=>{
    setLoading(true)
    await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${text}&api_key=00a0a3d918b14a22e2c3d6d079383b84&format=json`)
    .then(res=>res.json())
    .then(data=>{
      setLoading(false)
      setArtist(data.artist['name'])
      setPic(data.artist.image[2]['#text'])
      setListener(data.artist.stats['listeners'])
      setPlaycount(data.artist.stats['playcount'])
      setSummary(data.artist.bio['content']);
    })
  }


return (
    <ScrollView style={{flex:1}}>
    {loading?<ActivityIndicator size='large' color='black'/>:null}
    <View style={{ padding:5,flexDirection:"row",justifyContent:'space-around'}}>
      <TextInput
      style={styles.textinput}
      value={text}
      onChangeText={(text)=>setText(text)}
      />
      <Icon 
      name="search-circle" 
      size={75}
      onPress={()=>fetchData()} 
      />
      </View>
      
      <View style={{flex:1,alignItems:'center',paddingTop:10}}>
      <Image
      source={{uri:pic}}
      style={{width: 200, height: 200}}
      />
      <Text style={{fontSize:25,fontWeight:'bold'}}><Text style={{textDecorationLine:'underline'}}>Artist Name:</Text> {artist}</Text>
      <Text style={{fontSize:25,fontWeight:'bold'}}><Text style={{textDecorationLine:'underline'}}>Number of Listeners:</Text> {listener}</Text>
      <Text style={{fontSize:25,fontWeight:'bold'}}><Text style={{textDecorationLine:'underline'}}>Total PlayCount:</Text> {playcount}</Text>
      <Text style={{fontSize:25,fontWeight:'bold',textDecorationLine:'underline'}}>About {artist}:</Text>
      <Text style={{fontSize:20,fontStyle: 'italic'}}>{summary}</Text>
      </View> 
    </ScrollView>
  );
}

const styles=StyleSheet.create({
    textinput:{
        width:'75%',
        backgroundColor:'#b4b6d6',
        borderRadius:25,
    }
})

export default MusicPlayer;