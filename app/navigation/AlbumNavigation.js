import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AlbumFeed from '../component/album/AlbumFeed';
import Feed from '../component/feed/Feed';

const AlbumNavigator = createStackNavigator();

function AlbumNavigation() {
  return (
    <AlbumNavigator.Navigator
      initialRouteName="feed"
      screenOptions={{headerShown: false}}>
      <AlbumNavigator.Screen name="feed" component={Feed} />
      <AlbumNavigator.Screen name="nalbum" component={AlbumFeed} />
    </AlbumNavigator.Navigator>
  );
}

export default AlbumNavigation;
