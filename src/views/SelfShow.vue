<template>
  <div>
    <div>这里是从demo页面传过来的数据</div>
    名字: {{ item?.name }}

    年龄:{{ item?.age }}

    成绩:{{ item?.players }}
  </div>
  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
</template>

<script setup lang="ts">
import { data } from './user.json'
import { useRoute } from 'vue-router'
const route = useRoute()
const item = data.find((v) => v.age === route.params.id)
</script>

<style scoped></style>
