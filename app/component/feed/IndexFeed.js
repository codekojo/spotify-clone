import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import SongDescription from './SongDescription';
import {useNavigation} from '@react-navigation/native';

function IndexFeed({data}) {
  const navigation = useNavigation();
  function BuildFeed({item}) {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('nalbum', item)}>
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
