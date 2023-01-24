<template>
  <div style="background-color: #faf8fa; height: 100vh">
    <div style="display: flex; justify-content: center">
      <q-card class="q-ma-xl" style="width: 33.33%" vertical align="center">
        <q-card-section>
          <q-img
            src="../assets/icone.png"
            width="200px"
            height="200px"
            style=" ;"
          ></q-img>
        </q-card-section>
        <q-card-section>
          <spam
            >Nossa essência está em entender as demandas dos clientes e as
            expectativas e desejos de seus consumidores</spam
          >
        </q-card-section>
        <q-card-section class="q-gutter-md">
          <q-input rounded outlined v-model="username" label="username" />
          <q-input rounded outlined v-model="password" label="password" />
          <small><a href="">Esqueceu sua senha ?</a></small>
          <q-btn
            style="width: 70%"
            push
            color="blue-10"
            text-color="white"
            class="q-pa-md q-ma-xl"
            no-caps
            @click="dashBoard"
            >Acessar</q-btn
          >
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {};
  },
  methods: {
    dashBoard() {
      this.$router.push({ path: "/dashboard" });
    },
  },
};
</script>

<style>
spam {
  font-family: "Comfortaa", cursive;
  font-weight: bold;
}
</style>
