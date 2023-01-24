<template>
  <div>
    <q-btn @click="indexPage">Index</q-btn>
    <q-btn @click="testePage">DashBoard</q-btn>
  </div>
</template>

<script>
export default {
  name: "TestePage",
  data() {
    return {};
  },
  methods: {
    indexPage() {
      this.$router.push({ path: "/" });
    },
    testePage() {
      this.$router.push({ path: "/DashBoard" });
    },
  },
};
</script>
