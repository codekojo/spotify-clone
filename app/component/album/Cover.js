import * as React from 'react';
import {Image, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import colors from '../../config/colors';
import {MAX_HEADER_HEIGHT, HEADER_DELTA} from './Model';
import {BUTTON_HEIGHT} from './ShufflePlay';

const {interpolateNode, Extrapolate} = Animated;

function Cover({imageCover, val}) {
  const scale = interpolateNode(val, {
    inputRange: [-MAX_HEADER_HEIGHT, 0],
    outputRange: [4, 1],
    extrapolateRight: Extrapolate.CLAMP,
  });
  const opacity = interpolateNode(val, {
    inputRange: [-64, 0, HEADER_DELTA],
    outputRange: [0, 0.2, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Animated.View style={[styles.container, {transform: [{scale}]}]}>
      <Image style={styles.image} source={{uri: imageCover}} />
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: colors.black,
          opacity,
        }}
      />
    </Animated.View>
  );
}

export default Cover;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: MAX_HEADER_HEIGHT + BUTTON_HEIGHT * 2,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
});
