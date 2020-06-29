import Vue from 'vue'
import App from './App.vue'
import Lottie from "vue-lottie";
import store from "./store";

Vue.component("lottie", Lottie);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
