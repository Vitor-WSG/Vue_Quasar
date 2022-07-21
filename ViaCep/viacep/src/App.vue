<template>
  <div class="q-pa-md first-div">
    <q-card class="my-card q-pa-xs">
      <q-card-section>
        <q-toolbar class="bg-white text-dark">
          <q-icon name="search" size="25px" />
          <q-toolbar-title>Consulta de CEP</q-toolbar-title>
        </q-toolbar>
      </q-card-section>

      <q-card-section>
        <q-input
          class="q-mb-sm"
          outlined
          v-model="text"
          label="Informe o CEP..."
        >
        </q-input>
      </q-card-section>
      <q-btn
        push
        color="blue-10"
        text-color="white"
        class="q-pa-md q-mx-xl"
        @click="onGetCep"
        no-caps
        >Consultar</q-btn
      >
      <q-btn
        push
        color="grey-12"
        text-color="black"
        class="q-pa-md"
        @click="onGetCepClear"
        no-caps
        >Cancelar</q-btn
      >
      <q-card-section> </q-card-section>
    </q-card>

    <br />

    <q-card class="my-card q-pa-xs q-pa-sm" v-if="retorno">
      <q-input class="q-ma-xs" outlined v-model="cep" label="CEP..." readonly>
      </q-input>
      <q-input
        class="q-ma-xs"
        outlined
        v-model="logradouro"
        label="logradouro"
        readonly
      >
      </q-input>
      <q-input
        class="q-ma-xs"
        outlined
        v-model="bairro"
        label="bairro"
        readonly
      >
      </q-input>
      <q-input
        class="q-ma-xs"
        outlined
        v-model="localidade"
        label="localidade"
        readonly
      >
      </q-input>
      <q-input class="q-mb-md" outlined v-model="uf" label="UF" readonly>
      </q-input>
    </q-card>

    <q-card class="my-card-error" v-if="error">
      <q-card-section>
        <q-card-item>
          <q-icon id="error-icon" name="warning" size="8rem" />
        </q-card-item>
      </q-card-section>
      <q-card-section>
        <q-card-item>
          <span id="alert">OPS: CEP NÃO ENCONTRADO</span>
          <p>verifique se há letras ou espaço no valor informado</p>
        </q-card-item>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "App",
  data() {
    return {
      error: false,
      retorno: false,
      text: null,
      cep: null,
    };
  },
  methods: {
    getError() {
      return (this.error = true);
    },
    onGetCep() {
      this.numeroCep = this.text.replace(/\D/g, "");
      axios
        .get(`https://viacep.com.br/ws/${this.numeroCep}/json/`)
        .then((resposta) => {
          this.cep = resposta.data.cep;
          this.logradouro = resposta.data.logradouro;
          this.bairro = resposta.data.bairro;
          this.localidade = resposta.data.localidade;
          this.uf = resposta.data.uf;
          console.log(resposta.data);
          return (this.retorno = true);
        })
        .catch((error) => {
          this.getError();
          console.error(error);
        });
      return (this.text = ""), (this.retorno = false);
    },
    onGetCepClear() {
      return (this.text = "");
    },
  },
});
</script>

<style>
@keyframes alert {
  0% {
    color: red;
  }
  50% {
    color: white;
  }
  100% {
    color: red;
  }
}
#alert {
  color: red;
  font-weight: bolder;
  font-size: 20px;
}
.first-div {
  background-color: #f4f5f7;
  font-family: Manrope, sans-serif;
}
.my-card {
  border: 2px solid eaeaf1;
  border-radius: 25px;
  width: 50%;
}
.my-card-error {
  border: 2px solid eaeaf1;
  border-radius: 25px;
  width: 50%;
  display: flex;
  align-items: center;
}
#error-icon {
  animation-name: alert;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
}
</style>
