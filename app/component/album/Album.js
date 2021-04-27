import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import Content from './Content';
import Cover from './Cover';

const {Value} = Animated;

function Album({imageCover, data}) {
  const y = new Value(0);
  return (
    <View style={styles.container}>
      <Cover val={y} imageCover={imageCover} />
      <Content val={y} album={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default Album;
