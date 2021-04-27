import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import SongDescription from './SongDescription';

function IndexFeed({data}) {
  function BuildFeed({item}) {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={() => console.log(item)}>
        <SongDescription
          image={item.imgCover}
          artistName={item.artist}
          album={item.albumName}
        />
      </TouchableOpacity>
    );
  }
  return (
    <FlatList
      bounces={false}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={key => key.id}
      renderItem={BuildFeed}
    />
  );
}

export default IndexFeed;
