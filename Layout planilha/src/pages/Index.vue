<template>
  <q-page class="row items-center justify-center">
    <div class="container image q-pa-xl">
      <h5>Acesse chat</h5>
      <q-input
        v-model="email"
        label="Informe seu E-mail"
        rounded
        outlined
        bg-color="white"
        class="q-mb-md"
      />
      <q-btn label="Acessar chat" color="secondary" no-caps />
    </div>
    <q-separator></q-separator>
    <div class="container q-pa-xl">
      <h5>Cadastre-se</h5>
      <q-input
        v-model="nome"
        label="Informe seu nome"
        rounded
        outlined
        bg-color="white"
        class="q-mb-md"
      />
      <q-input
        v-model="emailSingUp"
        label="Informe seu E-mail"
        rounded
        outlined
        bg-color="white"
        class="q-mb-md"
      />
      <q-btn :ripple="false" label="Cadastre-se" color="secondary" no-caps />
    </div>
  </q-page>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      email: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h5 {
    color: $font-grey;
  }
  width: 48%;
  .q-input,
  .q-btn {
    width: 300px;
  }
}
.image {
  background-image: url(../assets/background.png);
  height: 100vh;
  width: 48%;
}
</style>