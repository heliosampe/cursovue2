import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue'
import RestauranteList from './RestaurantesList.vue'
import RestauranteTOP from './RestauranteTOP.vue'
import Contacto from './contacto.vue'

Vue.component('home', Home);
Vue.component('restauranteTop', RestauranteTOP);
Vue.component('contacto', Contacto);
Vue.component('restauranteList', RestauranteList);


new Vue({
  el: '#app',
  render: h => h(App)
})
