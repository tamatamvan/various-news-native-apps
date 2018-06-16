import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

class About extends Component {
  static navigationOptions = {
    title: 'About - Various News'
  }
  render() {
    return (
      <View style={ styles.container }>
        <Text>Various News - React Native Version</Text>
        <Text>By: tamatamvan</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default About;