<template>
  <app-navigation/>
</template>

<script>
import React from 'react';
import { Text } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';

import { StackNavigator } from 'vue-native-router';

import HomeScreen from './src/screens/Home.vue';
import AboutScreen from './src/screens/About';

const AppNavigation = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home - Various News',
      headerRight: (
        <Text 
          onPress={ () => navigation.navigate("About") }
          style={{
            padding: 16,
            color: '#fff',
          }}
        >
          About
        </Text>
      ) 
    }),
  },
  About: {
    screen: AboutScreen,
    navigationOptions: {
      title: 'About',
    },
  },
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#2962ff',
    },
    headerTintColor: '#fff',
  },
});

export default {
  components: {
    AppNavigation
  }
}
</script>

 
<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-color-primary {
  color: blue;
}
</style>
