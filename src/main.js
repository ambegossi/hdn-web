import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import ErrorNotification from './components/ErrorNotification.vue';
import SuccessNotification from './components/SuccessNotification.vue';
import LoadingPage from './components/LoadingPage.vue';

Vue.config.productionTip = false;

Vue.component('ErrorNotification', ErrorNotification);
Vue.component('SuccessNotification', SuccessNotification);
Vue.component('LoadingPage', LoadingPage);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
