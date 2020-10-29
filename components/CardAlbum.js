import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CardAlbum = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Player', {
         url:props.url
        });
      }}
    >
      <View style={styles.cardContainer}>
        <Image
          source={{
            uri: props.imageUrl,
          }}
          style={{width: '45%', height: 100}}
        />

        <View style={styles.textContainer}>
          <Text style={styles.titleText} ellipsizeMode="tail">
            {props.albumName}
          </Text>
          <Text style={styles.channelText}>
          {props.artistName}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardAlbum;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    margin: 10,
    marginBottom: 0,
  },
  textContainer: {
    paddingLeft: 7,
  },
  titleText: {
    fontSize: 17,
    width: Dimensions.get('screen').width / 2,
    color: 'white',
  },
  channelText: {
    fontSize: 14,
    color: 'white',
  },
});
