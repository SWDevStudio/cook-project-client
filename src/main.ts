import { createApp } from 'vue'
import router from "./router";
import App from './App.vue'
import { registerPlugins } from '@/plugins'

const app = createApp(App)
app.use(router)
registerPlugins(app)


app.mount('#app')
