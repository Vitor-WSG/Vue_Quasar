<template>
  <div>
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "LifeCycle",
  data() {
    return {
      name: "Vitor Gomes",
    };
  },
  /*
  Criação:
  Prepara o componente
  Ajax, inicializar algumas variáveis
  Não tem acesso ao template (DOM)

  Montagem:
  Inicializar lib externa
  Precia de acesso ao template (DOM)
  Tem acesso ao template (DOM)

  Atualizacao:
  Debug

  Desmontagem:
  Descmonta o componente

  $el = serve para acessar o primeiro componente do template
  */

  beforeCreate() {
    console.log("beforeCreate");
    console.log("Estado:", this.name);
    console.log("DOM:", this.$el);
  },
  created() {
    console.log("created");
    console.log("Estado:", this.name);
    console.log("DOM:", this.$el);
  },
  beforeMount() {
    console.log("beforeMounted");
    console.log("Estado:", this.name);
    console.log("DOM:", this.$el);
  },
  mounted() {
    console.log("mounted");
    console.log("Estado:", this.name);
    console.log("DOM:", this.$el);
  },
  beforeUnmounted() {
    console.log("beforeUnmounted");
    console.log("Estado:", this.name);
    console.log("DOM:", this.$el);
  },
  Unmounted() {
    console.log("Unmounted");
    console.log("Estado:", this.name);
    console.log("DOM:", this.$el);
  },
};
</script>
