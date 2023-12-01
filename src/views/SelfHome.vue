<template>
  <div>Home</div>
  <button @click="toDemo">to Demo</button>
  <div>{{ userStore.user.name }}-{{ userStore.user.age }}</div>
  <div>{{ loginStore.token }}</div>
  <div>{{ userStore.newSex }}</div>
  <button @click="change">改变数值</button>
  <button @click="changeLogin">改变login</button>
  <button @click="reset">重新</button>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStore, useLoginStore } from '@/store/modules/user'
// import { storeToRefs } from 'pinia'
const userStore = useUserStore()
const loginStore = useLoginStore()
const router = useRouter()
//  这样可以解构使用
//  storeToRefs是包了层toRef  返回的对象是一个Ref对象 所以需要.value改变
// const { name, age } = storeToRefs(userStore)
const reset = () => {
  userStore.$reset()
}
const changeLogin = () => {
  loginStore.token = 'zhaimou的token持久化保存'
}
const change = () => {
  // 第一种方式
  // userStore.user.name = 'zhaimou'
  //   第二种方式
  //   userStore.$patch({
  //     name: 'zhaimou',
  //     age: 20,
  //   })
  //   第三种
  userStore.setUser()
}
const toDemo = () => {
  router.push('/demo')
}
// 当onAction
// userStore.$onAction((args) => {
// })
// 当state值发生变化自动调用
// userStore.$subscribe((args, state) => {
//   console.log(`===================`, args)
//   console.log(`===================`, state)
// })
</script>

<style scoped>
div {
  margin-top: 20px;
}
button {
  margin-top: 20px;
}
</style>
