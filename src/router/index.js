import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Company from '../views/Company.vue';
import Projects from '../views/Projects.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/empresa',
    name: 'Company',
    component: Company,
  },
  {
    path: '/projetos',
    name: 'Projects',
    component: Projects,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
