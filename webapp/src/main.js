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
  render: h => h(App),
  mounted() {
    const CARA = '😊';
    const CRUZ = '👤';

    const lanzarMoneda = () => {
      let resultado = Math.floor(Math.random() * 2);
      if (resultado === 0) {
        console.log(`Cara: ${CARA}`);
      } else {
        console.log(`Cruz: ${CRUZ}`);
      }
    };

    const button = document.createElement('button');
    button.textContent = 'Lanzar Moneda';
    button.addEventListener('click', lanzarMoneda);
    document.body.appendChild(button);
  }
})
