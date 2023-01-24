<template>
  <q-layout class="main">
    <!-- <topbar @mudar-props="testeProps"/> -->
    <drawer />
  </q-layout>
</template>

<script>
import drawer from "../components/Drawer.vue";
import topbar from "../components/TopBar.vue";
export default {
  name: "Home",
  components: {
    drawer,
    // topbar,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.main {
  background-color: #f8f9fa;
}
</style>
