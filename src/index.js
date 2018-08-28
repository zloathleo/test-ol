import 'promise-polyfill/src/polyfill';

import Vue from 'vue';
import Vuex from 'vuex';

import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

import globalvar from './common/globalvar';
import myaxios from './common/myaxios';
import router from './router';
import App from './App';

//是否模拟数据
// import './common/mock';

import './assets/css/global.css';
import './assets/css/materialdesignicons.min.css';

Vue.use(Buefy, {
  defaultIconPack: 'mdi',
});

Vue.use(Vuex);

let globalEventHub = new Vue();

globalvar.GlobalEventHub = globalEventHub;
Vue.prototype.$myaxios = myaxios;
Vue.prototype.$globalEventHub = globalEventHub;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})