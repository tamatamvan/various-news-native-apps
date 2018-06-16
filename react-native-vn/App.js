import React from 'react';
import { Text, View } from 'react-native';

import Home from './screens/Home';

import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator({
  Home: {
    screen: Home,
  },
});

export default class App extends React.Component {
  render() {
    return (
      <RootStack/>
    );
  }
}
