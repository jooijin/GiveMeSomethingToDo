import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App);
app.config.globalProperties.$axios = axios;
axios.defaults.baseURL = 'http://www.boredapi.com/api'
app.mount('#app');
