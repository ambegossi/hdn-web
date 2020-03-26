import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Company from '../views/Company.vue';
import Projects from '../views/Projects.vue';
import Contact from '../views/Contact.vue';
import WorkWithUs from '../views/WorkWithUs.vue';
import Login from '../views/Login.vue';

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
  {
    path: '/contato',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/trabalhe-conosco',
    name: 'WorkWithUs',
    component: WorkWithUs,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
