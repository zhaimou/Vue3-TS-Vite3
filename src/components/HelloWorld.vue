<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()
let intro = ref('zhaimou')
</script>

<template>
  <h1>😀😀😀{{ msg }}😀😀😀</h1>
  <h2>👑👑👑👑👑{{ intro }}👑👑👑👑👑</h2>
</template>

<style scoped></style>
