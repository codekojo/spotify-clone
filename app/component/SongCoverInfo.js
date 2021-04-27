import React from 'react';
import {View, Text} from 'react-native';
import defaultStyle from '../config/defaultStyle';

function SongCoverInfo({albumURL, artistNameURL}) {
  return (
    <View
      style={{alignItems: 'center', marginVertical: 5, paddingHorizontal: 5}}>
      <Text style={defaultStyle.firstTitle}>{albumURL}</Text>
      <Text style={defaultStyle.secondTitle}>{artistNameURL}</Text>
    </View>
  );
}

export default SongCoverInfo;

// numberOfLines={1}
//         ellipsizeMode="tail"
