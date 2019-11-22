import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from './http.js'
// 按需导入element-ui
import { Table, Form, FormItem, Input, Button, Message } from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'

Vue.use(axios)
// 注册element-ui组件
Vue.use(Table)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Form)
Vue.use(Button)
// 全局定义
Vue.prototype.$http = axios
Vue.prototype.$message = Message
// 跨域API地址
Vue.prototype.HOST = '/robot'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
