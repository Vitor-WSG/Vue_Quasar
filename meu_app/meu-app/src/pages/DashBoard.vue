<template>
  <div>
    <q-btn @click="indexPage">Index</q-btn>
    <q-btn @click="testePage">Teste</q-btn>
  </div>
</template>

<script>
export default {
  name: "DashBoard",
  data() {
    return {};
  },
  methods: {
    indexPage() {
      this.$router.push({ path: "/" });
    },
    testePage() {
      this.$router.push({ path: "/teste" });
    },
  },
};
</script>

<style>
</style>
