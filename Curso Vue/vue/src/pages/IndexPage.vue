<template>
  <div class="q-ma-xl">
    <h2>Pagina inicial</h2>
    <p>Conteudo de estudo:</p>
    <ul class="q-gutter-md">
      <li><q-btn color="primary" icon="check" label="Condicionais" @click="onCondicionais" /></li>
      <li><q-btn color="primary" icon="check" label="DataBind" @click="onDataBind" /></li>
      <li><q-btn color="primary" icon="check" label="Two way data Bind" @click="onTwoWayDataBind" /></li>
      <li><q-btn color="primary" icon="check" label="Prop Computada" @click="onPropsComp" /></li>
      <li><q-btn color="primary" icon="check" label="Eventos" @click="onEvents" /></li>
      <li><q-btn color="primary" icon="check" label="Observadores(watch)" @click="observables" /></li>
      <li><q-btn color="primary" icon="check" label="lifeCycle" @click="lifeCycle" /></li>
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
    onEvents() {
      this.$router.push({name:"eventos"})
    },
      onPropsComp() {
        this.$router.push({name:"computadas"})
      },
      observables() {
        this.$router.push({name:"observables"})
      },
      lifeCycle() {
        this.$router.push({name:"lifecycle"})
      },
  },
}
</script>
