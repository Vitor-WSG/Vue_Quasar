<template>
  <Home />
  <router-view />
</template>

<script>
import Home from "./pages/Home.vue";

export default {
  name: "App",
  component: {
    Home,
  },
  data() {
    return {};
  },
};
</script>
