import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    // alias: ['/home1', '/home2'],
    redirect: '/home',
    // redirect: { path: '/home' },
    // redirect: (to) => {
    //     console.log(to)
    //     return {
    //         path:'home',
    //         query:{
    //             name:'zhaimou',
    //         }
    //     }
    // }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/SelfHome.vue'),
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('../views/SelfDemo.vue'),
  },
  {
    path: '/show:id',
    name: 'Show',
    component: () => import('../views/SelfShow.vue'),
  },
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})

export default router
