import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigation from './app/navigation/BottomNavigation';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </>
  );
}

export default App;
