import Vue from 'vue'
import App from './App.vue'
import router from './router'
import singleSpaVue from 'single-spa-vue'
Vue.config.productionTip = false

const appOptions = new Vue({
  router,
  render: h => h(App)
}).$mount('#vue') //挂在到父应用 id为vue的标签中
const vueLifeCycle = singleSpaVue({
  Vue,
  appOptions
})
//如果父应用调用我，可以在window上取到singleSpaNavigate
if(window.singleSpaNavigate){
  __webpack_public_path__ = 'http://localhost:10001/' //__webpack_public_path__是webpack自带的，此时就变成了绝对路径
}
else{
  delete appOptions.el
  new Vue(appOptions).$mount('#app')
}
//协议加入,定好了协议父应用会调用这些方法
export const bootstrap = vueLifeCycle.bootstrap
export const mount = vueLifeCycle.mount
export const unmount = vueLifeCycle.unmount

//我们需要敷应用加载子应用，将子应用打爆成一个个的lib去给父应用使用