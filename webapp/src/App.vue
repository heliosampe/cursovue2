<template>
  <div id="app">
    <img src="src/assets/logo.png" alt="Descripción de la imagen">
    <h1>{{ msg }}</h1>
    <h2>Restaurantes App</h2>
    <ul>
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/Contacto">Contacto</router-link></li>
      <li><router-link to="/RestauranteList">RestauranteList</router-link></li>
      <li><router-link :to="{name:'restauranteTop', params:{id: 10}}">RestauranteTop</router-link></li>
    </ul>
<!--     <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul> -->



    <router-view>


    </router-view>
    <!--CARGANDO COMPONENTE-->
    <!--
    <home></home>
    <restauranteList></restauranteList>
    <contacto></contacto>
    <restauranteTop></restauranteTop>
    -->

  </div>
</template>

<!-- <script>
import Contacto from './contacto.vue';
import RestauranteTOP from './RestauranteTOP.vue';
import RestaurantesList from './RestaurantesList.vue';
import Home from './Home.vue';


export default {
  name: 'app',
  data () {
    return {
      msg: 'PRIMEROS PASOS EN VUEJS :)'
    }
  }
}
</script> -->

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
