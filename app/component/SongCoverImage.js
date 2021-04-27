import React from 'react';
import {Image} from 'react-native';
import defaultStyle from '../config/defaultStyle';

function SongCoverImage({imageURL}) {
  return (
    <Image
      resizeMode="cover"
      source={{
        uri: imageURL,
      }}
      style={defaultStyle.imageSongCover}
    />
  );
}

export default SongCoverImage;
