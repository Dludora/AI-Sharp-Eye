import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import axios from "axios"

const app = createApp(App)
axios.defaults.baseURL = 'https://smallpic.dludora.xyz/api'
app.use(router)


app.mount('#app')
