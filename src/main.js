import Vue from 'vue'
import App from './App.vue'
import Chart from 'vue-chartist'

Vue.config.productionTip = false

Vue.use(Chart)

new Vue({
  render: h => h(App),
}).$mount('#app')
