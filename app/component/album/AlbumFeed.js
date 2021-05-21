import React from 'react';
import {useRoute} from '@react-navigation/native';
import Album from './Album';

function AlbumFeed() {
  const route = useRoute();
  const DATA = route.params;

  return <Album imageCover={DATA.imageCover} data={DATA} />;
}

export default AlbumFeed;
