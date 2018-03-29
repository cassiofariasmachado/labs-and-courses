import Vue from 'vue'
import App from './App.vue'

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

const vm = new Vue({
  ...App
});

vm.$mount('#app');
