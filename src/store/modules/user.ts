import { defineStore } from 'pinia'
const useUserStore = defineStore('user', {
  state: () => {
    return {
      name: 'Hello Welcome',
    }
  },
  // other options...
})

export default useUserStore
