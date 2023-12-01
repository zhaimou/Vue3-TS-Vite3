import { defineStore } from 'pinia'
type User = {
  name: string
  age: string
}
const login = (): Promise<User> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        name: 'liming',
        age: '18',
      })
    }, 2000)
  })
}

export const useLoginStore = defineStore('login', {
  state: () => {
    return {
      token: 'zhaimou',
    }
  },
  getters: {},
  actions: {},
})
export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: <User>{},
      sex: 'man',
    }
  },
  getters: {
    newSex(): string {
      return `$-${this.sex}`
    },
  },
  actions: {
    setSex(sex: string) {
      this.sex = sex
    },
    // 异步操作action方法
    async setUser() {
      const result = await login()
      this.user = result
      this.setSex('jiyin')
    },
  },
})

// export default useUserStore;
