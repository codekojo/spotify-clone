import React from 'react';

import {SafeAreaView, ScrollView, Platform, View} from 'react-native';
import colors from '../../config/colors';
import DATA from '../../Data';
import SongCombo from './SongCombo';
import MusicPlayer from '../MusicPlayer';

function Feed() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.black,
        paddingTop: Platform.OS === 'android' ? 50 : null,
      }}>
      <ScrollView bounces={false}>
        {DATA.map(item => {
          return (
            <SongCombo key={item.id} title={item.title} DATAS={item.songInfo} />
          );
        })}
      </ScrollView>
      <MusicPlayer />
    </SafeAreaView>
  );
}

export default Feed;
