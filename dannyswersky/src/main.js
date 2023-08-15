import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueTypedJs  from 'vue-typed-js'
import Particles from "vue3-particles";
const app = createApp(App);

app.use(Particles);
app.mount('#app');



