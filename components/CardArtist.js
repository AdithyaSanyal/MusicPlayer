import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CardTrack = (props) => {
  const navigation = useNavigation();
  return (
    <View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{props.artistName}</Text>
          <Text style={styles.channelText}>PlayCount:{props.playcount}</Text>
          <Text style={styles.subChannelText}>Listeners:{props.listeners}</Text>
        </View>
      </View>
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
  channelText:{
      fontSize: 13,
      color: 'white',
  },
  subChannelText: {
    fontSize: 13,
    borderBottomWidth: 0.5,
    borderBottomColor: 'white',
    color: 'white',
  },
});
