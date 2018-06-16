import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import NewsList from '../components/NewsList';

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home - Various News',
    headerRight: (
      <TouchableOpacity style={{ padding: 16 }}>
        <MaterialIcons name="info-outline" color="#fff" size={ 32 }/>
      </TouchableOpacity>
    )
  })

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
    padding: 16,
  },
});

export default Home;