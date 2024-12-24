import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '../views/Welcome.vue';
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';
import Dashboard from '../views/Dashboard.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Welcome,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    // Guard the route
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        next('/login'); // Redirect to login if no token is found
      } else {
        next(); // Allow access to the dashboard
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_API_URL),
  routes,
});

export default router;
