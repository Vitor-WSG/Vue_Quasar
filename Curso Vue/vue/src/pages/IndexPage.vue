<template>
  <div class="q-ma-xl">
    <h2>Pagina inicial</h2>
    <p>Conteudo de estudo:</p>
    <ul class="q-gutter-md">
      <li><q-btn color="primary" icon="check" label="Condicionais" @click="onCondicionais" /></li>
      <li><q-btn color="primary" icon="check" label="DataBind-Two way data Bind" @click="onDataBind" /></li>
      <li><q-btn color="primary" icon="check" label="For" @click="onFor" /></li>
      <li><q-btn color="primary" icon="check" label="Eventos" @click="onClick" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Index",
  data () {
    return {

    }
  },
  methods: {
    onCondicionais() {
      this.$router.push({name: "condicionais"})
    },
    onDataBind() {
      this.$router.push({name:"databind"})
    },
    onFor() {

    },
    onEvents() {

    }
  },
}
</script>
