<template>
  <div class="q-ma-xl">
    <h5>Conceito de observables (watch)</h5>
    <input type="text" v-model="name" />
    <br /><br />
    {{ name }}
    <br /><br />
    {{ obs }}
    <br /><br />
    <p>Usando observables com objetos</p>
    <input type="text" v-model="user.first_name" />
    <br />
    <input type="text" v-model="user.last_name" />
  </div>
</template>

<script>
export default {
  name: "Observadores",
  data() {
    return {
      name: "joao",
      obs: "",
      user: {
        first_name: "",
        last_name: "",
      },
    };
  },
  computed: {},

  //conteúdo que deve ser inserido o observador.
  //Informe o que deseja que aconteça quando houver alteração do conteudo observado
  //O obseradore deve ter o mesmo nome da variavel que se deseja observar, nesse caso "nome"
  watch: {
    /* Modelo com parametro da função para novos e antitos valores
       name (antigoValor,novoValor) {
      this.obs="observador ativo"
      console.log(novoValor,antigoValor)
      console.log("Ajax")
    } */

    /*     Usar dessa maneira, criar uma função dentro de metodos e passar para que ela seja executada
    dentro de outra função dentro dos observadores (watch) */
    name() {
      this.obsName();
    },
    user: {
      handler() {
        console.log("User alterado")
      },
      deep:true
    }
  },
  methods: {
    // Função enviada para dentro do observador para ser executada baseada no observador
    obsName() {
      this.obs = "observador ativo";
      console.log("Ajax");
    },
  },
};
</script>
