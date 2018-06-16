<template>
  <app-navigation/>
</template>

<script>
import { StackNavigator } from 'vue-native-router';

import HomeScreen from './screens/Home.vue';

const AppNavigation = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home - Various News'
    }
  }
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
