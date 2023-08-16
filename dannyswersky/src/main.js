import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import VueTypedJs  from 'vue-typed-js'
import Particles from "particles.vue3";
const app = createApp(App);

app.use(VueTypedJs);
app.use(Particles);
app.mount('#app');



