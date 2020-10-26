import React,{useState,useEffect} from 'react';
import {Text,View,StyleSheet,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const apiKey='00a0a3d918b14a22e2c3d6d079383b84';

const MusicPlayer=({userName,apiKey})=>{
  const [Data,setData]=useState({});
  const [Text,setText]=useState('');

  useEffect(()=>{
      fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=00a0a3d918b14a22e2c3d6d079383b84&format=json`)
      .then(response=>{
          if(response.ok){
              return response.json();
              console.log(response.json());
          }
          throw new Error('An error has occured');
      })
      .then(data=>setData(data))
      .catch(()=>
      setData({error:'An error has occured!!'})
      );
  },
  []);


return (
    <View style={{flex:1}}>
    <View style={{ padding:5,flexDirection:"row",justifyContent:'space-around'}}>
      <Icon name="arrow-back" size={32}/>
      <TextInput
      style={styles.textinput}
      value={value}
      onChangeText={(text)=>setText(text)}
      />
      <Icon 
      name="send-sharp" 
      size={32}
    //   onPress={()=>fetchData()} 
      />
      </View>
      {/* {loading?<ActivityIndicator size='large'/>:null}
      <FlatList
      data={miniCard}
      renderItem={({item})=>{
        console.log({item});
        return <MiniCard
        videoId={item.id.videoId}
        title={item.snippet.title}
        channel={item.snippet.channelTitle}
        />
      }}
      keyExtractor={item=>item.id.videoId}
      /> */}
    </View>
  );


}

export default MusicPlayer;