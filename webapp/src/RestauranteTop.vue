<template>
    <h2>Esto es la {{ texto }} : {{ id_restaurante }}</h2>
  </template>
  <script>
  export default {
    name: 'restaurante-top',
    mounted(){
      this.id_restaurante = this.$route.params.id;
    },
    data() {
      return {
        texto: 'Pagina RESTAURANTE DESTACADOS',
        id_restaurante: null
      }
    }
  }
  </script>