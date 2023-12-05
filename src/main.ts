import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App)
app.use(store)
// createApp(App).mount('#app')
app.use(router)
// app.use()
app.mount('#app')
