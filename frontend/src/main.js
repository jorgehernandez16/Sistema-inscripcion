import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000'; // URL de tu backend NestJS

createApp(App).mount('#app')
