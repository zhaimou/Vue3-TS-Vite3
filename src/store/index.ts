import { createPinia, PiniaPluginContext } from 'pinia'
import { toRaw } from 'vue'

const setStorage = (key: string, value: object) => {
  localStorage.setItem(key, JSON.stringify(value))
}
const getStoreage = (key: string) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {}
}
interface Options {
  key?: string
  value?: object
}
const __piniaKey__: string = 'zhaimou'
const PiniaPlugin = (option: Options) => {
  return (context: PiniaPluginContext) => {
    const { store } = context
    const data: object = getStoreage(`${option?.key ?? __piniaKey__}-${store.$id}`)
    store.$subscribe(() => {
      setStorage(`${option?.key ?? __piniaKey__}-${store.$id}`, toRaw(store.$state))
    })
    return {
      ...(data as object),
    }
  }
}
const store = createPinia()
store.use(
  PiniaPlugin({
    key: 'pinia',
  })
)
export default store
