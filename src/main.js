import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store";
//引入vant
import Vant from 'vant'
// 引入reset样式
import '@/assets/styles/reset.css'

// 引入amfe-flexible
import 'amfe-flexible'

import 'vant/lib/index.css';

Vue.use(Vant);

// 引入字体图标
import './assets/font/iconfont.css'
Vue.config.productionTip = false

new Vue({
  router:router,
  store:store,
  render: h => h(App)
}).$mount('#app')
