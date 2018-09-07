import 'promise-polyfill/src/polyfill';

import Vue from 'vue';
import Vuex from 'vuex';
 
import './common/initjs';

import globalvar from './common/globalvar';
import statePersisted from './common/state-persisted';
import stateMem from './common/state-mem';
import myaxios from './common/myaxios';
import router from './router';
import App from './App';

//是否模拟数据
import './common/mock';

import './assets/css/font-awesome.min.css' 
import './assets/css/w3.css' 
import './assets/css/global.css'; 


//vue内部常用
let globalEventHub = new Vue();
globalvar.GlobalEventHub = globalEventHub;
Vue.prototype.$myaxios = myaxios;
Vue.prototype.$globalEventHub = globalEventHub;
Vue.prototype.$globalvar = globalvar;

//缓存验证跳转逻辑
router.beforeEach(function (to, from, next) {
  if (to.name === 'login') {
    statePersisted.commit("setUser", undefined);
    stateMem.commit("initUserUI", undefined);
    myaxios.defaults.headers.accessToken = undefined;
    next();
  } else {
    let _currentUser = statePersisted.state.user;
    if (_currentUser === undefined) {
      next({ name: 'login' });
    } else {
      let mu = stateMem.state.user;
      if (mu === undefined) {
        myaxios.defaults.headers.accessToken = _currentUser.token;
        stateMem.commit("refreshUserUI", {
          user: _currentUser,
          routeName: to.name,
        });
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

