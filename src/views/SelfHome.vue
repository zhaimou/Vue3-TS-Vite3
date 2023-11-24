<template>
  <div>Home</div>
  <button @click="toDemo">to Demo</button>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const toDemo = () => {
  router.push('/demo')
}
</script>

<style scoped>
div {
  margin-top: 20px;
}
button {
  margin-top: 20px;
}
</style>
