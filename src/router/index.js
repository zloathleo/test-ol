import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'index',
      path: '/',
      redirect: { name: 'login' }
    },
    {
      name: 'login',
      path: '/login',
      component: resolve => require(['../components/login/Content.vue'], resolve),
      meta: { title: 'login' }
    },
    {
      path: '/my',
      component: resolve => require(['../components/framework/Root.vue'], resolve),
      meta: { title: 'root' },
      children: [
         //operator
        {
          name: 'device',
          path: '/device',
          component: resolve => require(['../components/device/Content.vue'], resolve),
          meta: { title: 'device' }
        },
        //admin
        {
          name: 'group',
          path: '/group',
          component: resolve => require(['../components/group/Content.vue'], resolve),
          meta: { title: 'group' }
        },
        {
          name: 'dashboard',
          path: '/dashboard',
          component: resolve => require(['../components/dashboard/Content.vue'], resolve),
          meta: { title: 'dashboard' }
        },
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
