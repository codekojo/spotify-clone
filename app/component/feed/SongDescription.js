import React from 'react';
import {View, Text} from 'react-native';
import SongCoverInfo from './SongCoverInfo';
import SongCoverImage from './SongCoverImage';

function SongDescription({image, artistName, album}) {
  return (
    <View style={{width: 170, margin: 10}}>
      <SongCoverImage imageURL={image} />
      {/* Container for song information */}
      <SongCoverInfo albumURL={album} artistNameURL={artistName} />
    </View>
  );
}

export default SongDescription;
