<template>
  <div>
    <q-btn @click="dashboardPage">dashboard</q-btn>
    <q-btn @click="testePage">teste</q-btn>
  </div>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data () {
    return {

    }
  },
    methods: {
    dashboardPage() {
      this.$router.push({ path: "/dashboard" });
    },
    testePage() {
      this.$router.push({ path: "/teste" });
    },
  },

})
</script>
