import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function Track({track, artist, index}) {
  return (
    <View style={styles.row}>
      <View style={styles.cell}>
        <Text style={styles.index}>{index}</Text>
      </View>
      <View style={[styles.cell, {flex: 1}]}>
        <Text style={styles.name}>{track.name}</Text>
        <Text style={styles.artist}>{track.artist || artist}</Text>
      </View>
      <View style={styles.cell}>
        <MaterialCommunityIcons name="email" color="#b2b3b4" size={24} />
      </View>
    </View>
  );
}

export default Track;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  cell: {
    padding: 16,
    justifyContent: 'center',
  },
  index: {
    color: '#b2b3b4',
  },
  artist: {
    color: '#b2b3b4',
  },
  name: {
    color: 'white',
  },
});
