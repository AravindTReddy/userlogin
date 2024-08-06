import { createRouter, createWebHistory } from 'vue-router';
import UserLogin from '../views/UserLogin.vue';
import UserHome from '../views/UserHome.vue';

const routes = [
  { path: '/', name: 'UserLogin', component: UserLogin },
  { path: '/home', name: 'UserHome', component: UserHome }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
