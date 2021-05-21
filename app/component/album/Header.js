import * as React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import Animated from 'react-native-reanimated';
import {MIN_HEADER_HEIGHT, HEADER_DELTA} from './Model';
import {BUTTON_HEIGHT} from './ShufflePlay';

const {interpolateNode, Extrapolate} = Animated;

function Header({artist, coverName, albumName, val}) {
  const opacity = interpolateNode(val, {
    inputRange: [HEADER_DELTA - 16, HEADER_DELTA],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  const textOpacity = interpolateNode(val, {
    inputRange: [HEADER_DELTA - 8, HEADER_DELTA - 4],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Animated.View style={[styles.container, {opacity}]}>
      <Animated.Text style={[styles.title, {opacity: textOpacity}]}>
        {`${artist || coverName} || ${albumName}`}
      </Animated.Text>
    </Animated.View>
  );
}
export default Header;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: BUTTON_HEIGHT / 2 - MIN_HEADER_HEIGHT,
    left: 0,
    right: 0,
    height: MIN_HEADER_HEIGHT,
    backgroundColor: 'black',
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
