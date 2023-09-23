import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 全局导入
// import Vant from 'vant'
// import 'vant/lib/index.css'
import '@/utils/Vant-UI.js'

import ArticleItem from '@/components/ArticleItem.vue'

Vue.component('ArticleItem', ArticleItem)
Vue.config.productionTip = false

// Vue.use(Vant)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
