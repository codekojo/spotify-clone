import React from 'react';
import {View, Text} from 'react-native';
import defaultStyle from '../../config/defaultStyle';
import IndexFeed from './IndexFeed';

function SongCombo({title, DATAS}) {
  return (
    <View style={{marginBottom: 55}}>
      <Text style={defaultStyle.playlistTitle}>{title}</Text>
      <IndexFeed data={DATAS} />
    </View>
  );
}

export default SongCombo;
