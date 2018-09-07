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
          name: 'operatorDashboard',
          path: '/operatorDashboard',
          component: resolve => require(['../components/operator-dashboard/Content.vue'], resolve),
          meta: { title: 'operatorDashboard' }
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
