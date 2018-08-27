import 'promise-polyfill/src/polyfill';

import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';


import globalvar from './common/globalvar';
import myaxios from './common/myaxios';
import router from './router';
import App from './App';

import './assets/css/materialdesignicons.min.css';

//是否模拟数据
import './common/mock';

Vue.use(Buefy, {
  defaultIconPack: 'mdi',
});

let globalEventHub = new Vue();

globalvar.GlobalEventHub = globalEventHub;
Vue.prototype.$myaxios = myaxios;
Vue.prototype.$globalEventHub = globalEventHub;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})