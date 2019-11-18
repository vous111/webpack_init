import Vue from 'vue'
import App from './vue/App.vue'

require('./css/main.css') // commonJs用法，依赖mian.css

// runtime-compiler
new Vue({
  el:"#app",
  template:'<App/>',
  components:{
    App
  }
})


// runtime-only

// new Vue({
//   render: h => h(App)
// }).$mount('#app')