import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../config/colors';

function Track({track, artist, index, coverName}) {
  return (
    <View style={styles.row}>
      <View style={styles.cell}>
        <Text style={styles.index}>{index}</Text>
      </View>
      <View style={[styles.cell, {flex: 1}]}>
        <Text numberOfLines={1} style={styles.name}>
          {track.name}
        </Text>
        <View style={styles.artistInfo}>
          <MaterialIcons name="explicit" color={colors.grey} size={18} />
          <Text numberOfLines={1} style={styles.artist}>
            {artist || coverName}
            {track.artist && `, ${track.artist}`}
          </Text>
        </View>
      </View>
      <View style={styles.cell}>
        <MaterialCommunityIcons
          name="dots-vertical"
          color="#b2b3b4"
          size={24}
        />
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
    // color: '#b2b3b4',
    color: colors.grey,
    fontSize: 15,
    fontWeight: '600',
    paddingLeft: 5,
  },
  name: {
    color: 'white',
    fontWeight: '700',
    fontSize: 17,
  },
  artistInfo: {
    flexDirection: 'row',
    marginVertical: 4,
    alignItems: 'center',
  },
});
