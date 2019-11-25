import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './router'

Vue.use(VueResource);
Vue.use(VueRouter);

export const bus = new Vue()
Vue.config.productionTip = false

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

// Vue.filter("to-uppercase", function(value){
//   return value.toUpperCase();
// });

new Vue({
  render: h => h(App),
  router : router
}).$mount('#app')
