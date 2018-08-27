import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/',
      component: resolve => require(['../components/framework/Root.vue'], resolve),
      meta: { title: 'root' },
      children: [
        {
          name: 'dashboard',
          path: '/dashboard',
          component: resolve => require(['../components/dashboard/Content.vue'], resolve),
          meta: { title: 'dashboard' }
        },
        {
          name: 'device-control',
          path: '/device-control',
          component: resolve => require(['../components/device-control/Content.vue'], resolve),
          meta: { title: 'alarm' }
        },
        {
          name: 'alarm',
          path: '/alarm',
          component: resolve => require(['../components/alarm/Content.vue'], resolve),
          meta: { title: 'alarm' }
        },
      ]
    },
  ]
})
