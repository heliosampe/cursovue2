import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import RestauranteList from './RestaurantesList.vue'
import RestauranteTOP from './RestauranteTOP.vue'
import Contacto from './contacto.vue'

Vue.component('home', Home);
Vue.component('restauranteTop', RestauranteTOP);
Vue.component('contacto', Contacto);
Vue.component('restauranteList', RestauranteList);

Vue.use(VueRouter);
const routes = [
{path: '/home', component: Home},
{path: '/', component: Home},
{path: '/restauranteList', component: RestauranteList},
{path: '/restauranteTop/:id', name: 'restauranteTop', component: RestauranteTOP}, 
{path: '/contacto', component: Contacto},
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
