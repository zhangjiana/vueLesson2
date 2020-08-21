import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('dog', 
{
  // render() {
  //   return(<p>this is a dog</p>)
  // }
  template: "<span>我是一个Vue组件示例dog</span>"
})

new Vue({
  render: h => h(App),
}).$mount('#app')
