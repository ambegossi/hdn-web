import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import ErrorNotification from './components/ErrorNotification.vue';
import SuccessNotification from './components/SuccessNotification.vue';

Vue.config.productionTip = false;

Vue.component('ErrorNotification', ErrorNotification);
Vue.component('SuccessNotification', SuccessNotification);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
