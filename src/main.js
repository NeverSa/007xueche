import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import api from "./api"
import 'swiper/dist/css/swiper.css'
Vue.prototype.$api=api;
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
