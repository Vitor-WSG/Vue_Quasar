<template>
  <q-header reveal elevated class="bg-white text-dark header q-py-xl">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="$emit('toggleLeftDrawer')" />

      <q-toolbar-title>
        <a href="">
          <q-avatar>
            <img src="../assets/icone.png" />
          </q-avatar>
          <q-toolbar-item> VGX ADMIN </q-toolbar-item>
        </a>
      </q-toolbar-title>
      <q-toolbar-title>
        <p><spam>Bom dia,</spam> <b>Usuário logado</b></p>
      </q-toolbar-title>

      <q-toolbar-item> </q-toolbar-item>

      <q-btn dense flat round @click="$emit('togglerightDrawer')">
        <q-avatar size="50px" class="q-ma-md">
          <img src="http://i.pravatar.cc/40" /> </q-avatar
      ></q-btn>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: "topbar",
  data() {
    return {
    };
  },
};
</script>

<style>
a {
  text-decoration: none;
  color: black;
}
spam {
  font-family: "Comfortaa", cursive;
  font-weight: bold;
}
.header {
  height: 10%;
  display: flex;
  align-content: flex-end;
}
</style>
