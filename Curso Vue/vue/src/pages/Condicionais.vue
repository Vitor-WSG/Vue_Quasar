<template>
  <div class="q-ma-xl">
    <h6>Condicionais V-Show, V-If, V-else-if</h6>

    <p>Informe seu usuario</p>
    <select v-model="usuario">
      <option value="admin">admin</option>
      <option value="usuario">usuario</option>
      <option>visitante</option>
      <option>outros</option>
    </select>

    <h6 v-if="usuario === 'admin'">Seja bem vindo Administrador</h6>
    <h6 v-else-if="usuario === 'usuario'">Seja bem vindo Usuario</h6>
    <h6 v-else>Seja bem vindo visitante</h6>

  <span>Usar V-show ?</span>
  <br>
    <q-radio v-model="show" label="Sim" />
    <q-radio v-model="nshow" label="Não" />
    <br>
    <span v-show='show'>Usando o V-show como condicional</span>
  </div>
</template>

<script>
export default {
  name: "Condicionais",
  data() {
    return {
      usuario: "",
      show: true,
      nshow: false,
    };
  },
};
</script>
