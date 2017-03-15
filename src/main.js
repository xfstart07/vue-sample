import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import second from './components/second.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.debug = true

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Element)

const First = {
  template: '<div><h2>我是第 1 个子页面</h2></div>'
}

const router = new VueRouter({
  routes: [{
    path: '/first',
    component: First
  }, {
    path: '/second',
    component: second
  }]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
