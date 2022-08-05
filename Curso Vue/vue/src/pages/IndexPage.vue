<template>
  <div class="q-ma-xl">
    <h2>Pagina inicial</h2>
    <p>Conteudo de estudo:</p>
    <ul class="q-gutter-md">
      <li><q-btn color="primary" icon="check" label="Condicionais" @click="onCondicionais" /></li>
      <li><q-btn color="primary" icon="check" label="DataBind" @click="onDataBind" /></li>
      <li><q-btn color="primary" icon="check" label="Two way data Bind" @click="onTwoWayDataBind" /></li>
      <li><q-btn color="primary" icon="check" label="For" @click="onFor" /></li>
      <li><q-btn color="primary" icon="check" label="Eventos" @click="onEvents" /></li>
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
    onTwoWayDataBind() {
      this.$router.push({name:"twowaydatabind"})
    },
    onFor() {
      this.$router.push({name:"onfor"})
    },
    onEvents() {
      this.$router.push({name:"eventos"})
    }
  },
}
</script>
