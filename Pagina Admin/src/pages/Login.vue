<template>
  <div class="q-pa-xl background">
    <q-card class="my-card">
      <q-card-section style="display: flex; justify-content: center">
        <q-img
          src="../assets/VGX-logo.png"
          width="200px"
          height="200px"
          style="text-align: center"
        ></q-img>
      </q-card-section>
      <div>
        <q-card-section vertical align="center">
          <spam
            >Nossa essência está em entender as demandas dos clientes e as
            expectativas e desejos de seus consumidores</spam
          >
        </q-card-section>
        <q-card-section class="q-gutter-md">
          <q-input rounded outlined v-model="username" label="username" />
          <q-input rounded outlined v-model="password" label="password" />
          <small class="q-gutter-md"><a href="">Esqueceu sua senha ?</a></small>
          <q-btn
            style="width: 70%"
            push
            color="blue-10"
            text-color="white"
            class="q-pa-md q-mx-xl"
            no-caps
            >Acessar</q-btn
          >
        </q-card-section>
      </div>
    </q-card>
  </div>
</template>

<script>
import Home from "./Home.vue";
export default {
  name: "Login",
  data() {
    return {};
  },
  components: { Home },
};
</script>

<style scoped>
spam {
  font-family: "Comfortaa", cursive;
  font-weight: bold;
}
.background {
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
}
.my-card {
  background-color: white;
  width: 33.33%;
  height: auto;
}
</style>
