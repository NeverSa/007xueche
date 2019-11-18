import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import api from "./api"
import 'swiper/dist/css/swiper.css'
Vue.prototype.$api=api;
Vue.use(VueAwesomeSwiper, /* { default global options } */)
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import scroll from 'vue-seamless-scroll'
Vue.use(scroll)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
