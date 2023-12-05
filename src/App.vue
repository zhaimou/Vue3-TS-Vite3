<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <router-link replace to="/">siusiu</router-link>
  <RouterView />
  <HelloWorld msg="Vite + Vue + TS" />
</template>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
}
html,
body,
#app {
  width: 100vw;
  height: 100vh;
}
</style>
