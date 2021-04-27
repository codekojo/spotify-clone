import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from '../component/feed/Feed';
import {View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AlbumNavigation from './AlbumNavigation';

const HomeTab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <HomeTab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: 'black',
        },
      }}>
      <HomeTab.Screen
        name="Home"
        component={AlbumNavigation}
        options={{
          tabBarIcon: ({size, color}) => {
            return (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            );
          },
        }}
      />
      <HomeTab.Screen
        name="Search"
        component={Feed}
        options={{
          tabBarIcon: ({size, color}) => {
            return (
              <MaterialCommunityIcons
                name="account-search"
                color={color}
                size={size}
              />
            );
          },
        }}
      />
      <HomeTab.Screen
        name="Library"
        component={Feed}
        options={{
          tabBarIcon: ({size, color}) => {
            return (
              <MaterialCommunityIcons
                name="library-shelves"
                color={color}
                size={size}
              />
            );
          },
        }}
      />
      <HomeTab.Screen
        name="Premium"
        component={Feed}
        options={{
          tabBarIcon: ({size, color}) => {
            return (
              <MaterialCommunityIcons
                name="spotify"
                color={color}
                size={size}
              />
            );
          },
        }}
      />
    </HomeTab.Navigator>
  );
}

export default BottomNavigation;
