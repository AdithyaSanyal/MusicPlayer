import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CardTrack = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Player', {
          url: props.url,
          
        });
      }}
    >
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{props.trackName}</Text>
          <Text style={styles.channelText}>Song&#8226;{props.artistName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardTrack;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    margin: 10,
    marginBottom: 0,
  },
  textContainer: {
    margin: 10,
  },
  titleText: {
    fontSize: 18,
    color: 'white',
  },
  channelText: {
    fontSize: 13,
    borderBottomWidth: 0.5,
    borderBottomColor: 'white',
    color: 'white',
  },
});
