import * as React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';

export const BUTTON_HEIGHT = 25;
export const BUTTON_WIDTH = 80;

function SavedPlaylist() {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.button}>
        <Text style={styles.label}>SAVED</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default SavedPlaylist;
const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    height: BUTTON_HEIGHT,
    width: BUTTON_WIDTH,
    borderRadius: 80 / 2,
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#1ed760',
    marginVertical: 5,
  },
  label: {
    color: 'white',
    fontSize: 13,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
