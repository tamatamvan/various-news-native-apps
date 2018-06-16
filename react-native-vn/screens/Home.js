import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Home extends Component {
  static navigationOptions = {
    title: 'Home - Various News',
  }
  render() {
    return (
      <View style={ styles.container }>
        <Text>Hello World!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
    marginRight: 16,
  },
});

export default Home;