<template>
  <div>Demo</div>
  <ul>
    <li v-for="(item, index) in data" :key="index">
      {{ item.name }}
      {{ item.age }}
      {{ item.players }}
      <button @click="toDetail(item)">详情</button>
    </li>
  </ul>
  <button>改变</button>
</template>

<script setup lang="ts">
import { data } from './user.json'
import { useRouter } from 'vue-router'
const router = useRouter()
type item = {
  name: string
  age: string
  players: string
}
const toDetail = (item: item) => {
  router.push({
    // 使用params传参必须要用组件name
    name: 'Show',
    // query: item,
    params: {
      id: item.age,
    },
  })
}
</script>

<style scoped>
li {
  list-style: none;
}
</style>
