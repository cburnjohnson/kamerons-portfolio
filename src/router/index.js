import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Events from '@/pages/Events';
import Login from '@/pages/Login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
});
