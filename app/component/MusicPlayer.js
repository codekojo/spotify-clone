import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../config/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

function MusicPlayer() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Entypo name="chevron-up" color="white" size={30} />
        <View style={styles.music}>
          <Text style={styles.song}>Just a Moment</Text>
          <Entypo name="dot-single" color={colors.grey} size={15} />
          <Text style={styles.artist}>Nas, Quan</Text>
        </View>
        <View style={styles.icons}>
          <Ionicons
            name="play-circle-outline"
            color="white"
            size={40}
            style={{paddingHorizontal: 5}}
          />
          <Ionicons name="play-skip-forward-sharp" color="white" size={30} />
        </View>
      </View>
    </View>
  );
}

export default MusicPlayer;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: colors.lightblack,
    bottom: 0,
    width: '100%',
  },
  content: {
    width: '100%',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  music: {
    flex: 1,
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    flexDirection: 'row',
    marginHorizontal: 5,
    alignItems: 'center',
  },
  song: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  artist: {
    color: colors.grey,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
