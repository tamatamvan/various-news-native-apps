import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Home extends Component {
  static navigationOptions = {
    title: 'Home - Various News',
  }
  render() {
    return (
      <View>
        <Text>Hello World!</Text>
      </View>
    );
  }
}

export default Home;