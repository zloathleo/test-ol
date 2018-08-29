import 'promise-polyfill/src/polyfill';

import Vue from 'vue';
import Vuex from 'vuex';

import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

import globalvar from './common/globalvar';
import statePersisted from './common/state-persisted';
import stateMem from './common/state-mem';
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


//vue内部常用
let globalEventHub = new Vue();
globalvar.GlobalEventHub = globalEventHub;
Vue.prototype.$myaxios = myaxios;
Vue.prototype.$globalEventHub = globalEventHub;

//缓存验证跳转逻辑
router.beforeEach(function (to, from, next) {
  if (to.name === 'login') {
    next();
  } else {
    let _currentUser = statePersisted.state.user;
    if (_currentUser == undefined) {
      next({ name: 'login' });
    } else {
      let mu = stateMem.state.user;
      if (mu === undefined) {
        stateMem.commit("initUserUI", _currentUser);
      }
      next();
    }
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

