import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Company from '../views/Company.vue';
import Projects from '../views/Projects.vue';
import Contact from '../views/Contact.vue';
import WorkWithUs from '../views/WorkWithUs.vue';
import Login from '../views/Login.vue';
import User from '../views/User.vue';

import store from '../store';

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
  {
    path: '/user',
    name: 'User',
    component: User,
    meta: {
      login: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.login)) {
    if (store.state.login) {
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
});

export default router;
