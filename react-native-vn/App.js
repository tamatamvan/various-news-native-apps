import React from 'react';
import { Text, View } from 'react-native';

import Home from './screens/Home';
import About from './screens/About';

import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator({
  Home: {
    screen: Home,
  },
  About: {
    screen: About,
  },
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#2962FF',
    },
    headerTintColor: '#fff',
  },
});

export default class App extends React.Component {
  render() {
    return (
      <RootStack/>
    );
  }
}
