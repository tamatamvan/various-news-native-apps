import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import NewsList from '../components/NewsList';

class Home extends Component {
  static navigationOptions = {
    title: 'Home - Various News',
  }
  render() {
    return (
      <View style={ styles.container }>
        <NewsList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
});

export default Home;