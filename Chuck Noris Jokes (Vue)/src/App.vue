<template>
  <!-- <h1>Componente Principal</h1> -->

  <!-- Referencia do componente FirstComponent -->
  <first-component/>
  <second-component/>
  <third-component/>
</template>

<script>
  // procedimento para importacao de componente
  // import FirstComponent from './components/FristComponent.vue'
  // import SecondComponent from './components/SecondComponent.vue'
  import ThirdComponent from './components/ThirdComponent.vue'

  // procedimento para exportacao de componente
  export default {
    name: 'App',
  // informando o nome dos componentes a ser importados
    components: {
      // FirstComponent,
      // SecondComponent,
      ThirdComponent
    }
  }
</script>