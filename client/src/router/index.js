import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Events from '@/pages/Events';
import Login from '@/pages/Login';
import Admin from '@/pages/Admin';
import axios from 'axios';

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
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      async beforeEnter(to, from, next) {
        try {
          await axios.get('/api/auth', {
            headers: {
              'x-auth-token': window.localStorage.getItem('userToken')
            }
          });

          next();
        } catch (error) {
          console.error(error);
          next({
            name: 'Login'
          });
        }
      }
    }
  ]
});
