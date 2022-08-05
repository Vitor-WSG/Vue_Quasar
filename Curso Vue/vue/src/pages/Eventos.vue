<template>
  <div class="q-ma-xl">
    <h6>Usando eventos no Vue</h6>
    <p>Pode ser usado 3 duas sintaxes:</p>
    <ul>
      <li>@click="nomeEvento"</li>
      <li>v-on:click="nomeEvento"</li>
      <li>@click="nomeEvento()"</li>
    </ul>
    <div class="q-gutter-sm">
      <q-btn color="primary" icon="check" label="OK" @click="onClick" />
      <q-btn color="primary" icon="check" label="OK" v-on:click="onClick" />
      <q-btn color="primary" icon="check" label="OK" @click="onClick()" />
    </div>
    <br /><br />
    <div>
      <p>Evendos de mouse</p>
      <q-btn
        color="primary"
        icon="check"
        label="evento mouse"
        @mouseover="onMouseOver"
        @mouseleave="onMouseLeave"
      />
      {{ texto }}
      {{ mouse }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Eventos",
  data() {
    return {
      texto: "",
    };
  },
  methods: {
    onClick() {
      alert("Ativou o evendo de clique");
    },
    onMouseOver() {
      this.texto = "Mouse entrou";
    },
    onMouseLeave() {
      this.texto = "Mouse saiu";
    },
  },
};
</script>
