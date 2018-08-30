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
      path: '/operator',
      component: resolve => require(['../components/framework/Root.vue'], resolve),
      meta: { title: 'operator' },
      children: [
        //operator
        {
          name: 'device',
          path: '/device',
          component: resolve => require(['../components/device/Content.vue'], resolve),
          meta: { title: 'device' }
        },
        {
          name: 'page',
          path: '/page',
          component: resolve => require(['../components/page/Content.vue'], resolve),
          meta: { title: 'page' }
        },
      ]
    },
    {
      path: '/admin',
      component: resolve => require(['../components/framework/Root.vue'], resolve),
      meta: { title: 'admin' },
      children: [
        //admin
        {
          name: 'group',
          path: '/group',
          component: resolve => require(['../components/group/Content.vue'], resolve),
          meta: { title: 'group' }
        },
      ]
    },
  ]
})
