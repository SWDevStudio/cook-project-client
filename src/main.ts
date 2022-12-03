import { createApp } from 'vue'
import router from "./router";
import App from './App.vue'

import PrimeVue from 'primevue/config';
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/md-dark-indigo/theme.css'
import 'primevue/resources/primevue.min.css'

import InputText from "primevue/inputtext";
import Checkbox from "primevue/checkbox";
import Button from "primevue/button";

const app = createApp(App)
app.use(router)
app.use(PrimeVue)

app.component('InputText', InputText)
app.component('Checkbox', Checkbox)
app.component('Button', Button)

app.mount('#app')
