import Vue from 'nativescript-vue';
import axios from 'axios';

import router from './router';


import './styles.scss';

Vue.prototype.$http = axios;

// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

new Vue({

  router,


}).$start();
