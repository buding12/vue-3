import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 定义全局
import Pannel from './components/Pannel_1.vue'
// 组件的标签名PannelGlobal，使用的是Pannel这个对象
Vue.component("PannelGlobal", Pannel)



new Vue({
  render: h => h(App),
}).$mount('#app')
