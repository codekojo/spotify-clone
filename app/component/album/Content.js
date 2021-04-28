import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated from 'react-native-reanimated';

import {onScrollEvent} from 'react-native-redash/lib/module/v1';

import {MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT} from './Model';
import Track from './Track';
import ShufflePlay, {BUTTON_HEIGHT} from './ShufflePlay';
import Header from './Header';
import SongCoverImage from '../feed/SongCoverImage';
import colors from '../../config/colors';
import SavedPlaylist from './SavedPlaylist';
import SwitchUI from '../SwitchUI';

const {interpolateNode, Extrapolate} = Animated;

function Content({
  album: {artist, tracks, imgCover, albumName, coverName},
  val,
}) {
  const height = interpolateNode(val, {
    inputRange: [-MAX_HEADER_HEIGHT, -BUTTON_HEIGHT / 2],
    outputRange: [0, MAX_HEADER_HEIGHT + BUTTON_HEIGHT],
    extrapolate: Extrapolate.CLAMP,
  });
  const opacity = interpolateNode(val, {
    inputRange: [-MAX_HEADER_HEIGHT / 2, 0, MAX_HEADER_HEIGHT / 2],
    outputRange: [0, 1, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <Animated.ScrollView
      onScroll={onScrollEvent({y: val})}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={1}
      stickyHeaderIndices={[1]}>
      <View style={styles.cover}>
        <Animated.View style={[styles.gradient, {height}]}>
          <LinearGradient
            style={StyleSheet.absoluteFill}
            start={{x: 0, y: 0.3}}
            end={{x: 0, y: 1}}
            colors={['transparent', 'rgba(0, 0, 0, 0.2)', colors.lightgrey]}
          />
        </Animated.View>
        <View style={styles.artistContainer}>
          <SongCoverImage imageURL={imgCover} />
          <Animated.Text style={[styles.album, {opacity}]}>
            {albumName}
          </Animated.Text>
          <SavedPlaylist />
          <Animated.Text style={[styles.artist, {opacity}]}>
            ALBUM BY {artist || coverName}
          </Animated.Text>
        </View>
      </View>

      <View style={styles.header}>
        <Header {...{val, artist, coverName, albumName}} />
        <ShufflePlay />
      </View>
      <Animated.View
        style={{
          color: 'white',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItemss: 'center',
          paddingHorizontal: 15,
          marginTop: 10,
          backgroundColor: 'black',
          paddingVertical: 15,
        }}>
        <Animated.Text
          style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
          Download
        </Animated.Text>
        <SwitchUI
          trackColor={{false: '#767577', true: colors.green}}
          thumbColor={isEnabled ? colors.lightgreen : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </Animated.View>
      <View style={styles.tracks}>
        {tracks.map((track, key) => (
          <Track index={key + 1} {...{track, key, artist, coverName}} />
        ))}
      </View>
    </Animated.ScrollView>
  );
}

export default Content;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: MIN_HEADER_HEIGHT - BUTTON_HEIGHT / 2,
  },
  cover: {
    height: MAX_HEADER_HEIGHT - BUTTON_HEIGHT,
    marginVertical: 50,
    // backgroundColor: 'red',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: 'center',
  },
  artistContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  artist: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 10,
    paddingBottom: 30,
  },
  album: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  header: {
    marginTop: -BUTTON_HEIGHT,
    marginBottom: -15,
    // backgroundColor: 'black',
  },
  tracks: {
    paddingTop: 2,
    // paddingTop: 32,
    backgroundColor: 'black',
    // backgroundColor: colors.black,
    marginBottom: 50,
  },
});
