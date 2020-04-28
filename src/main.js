import Vue from 'vue';

import yaml from 'yaml';
import App from './App.vue';

import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import '@babel/polyfill';

Vue.config.productionTip = false;

(async () => {
  // initialization

  const textData = await ((await fetch('./data.yml'))).text();
  store.commit('initData', yaml.parse(textData));

  return true;
})().then(() => {
  new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
  }).$mount('#app');
});
