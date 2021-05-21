import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feed from '../component/feed/Feed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AlbumNavigation from './AlbumNavigation';
import colors from '../config/colors';

const HomeTab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <HomeTab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: colors.lightblack,
        },

        activeTintColor: 'white',
        inactiveTintColor: 'gray',
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
            return <Feather name="search" color={color} size={size} />;
          },
        }}
      />
      <HomeTab.Screen
        name="Library"
        component={Feed}
        options={{
          tabBarIcon: ({size, color}) => {
            return (
              <MaterialIcons
                name="my-library-music"
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
