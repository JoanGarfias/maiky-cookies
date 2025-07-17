import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import clickOutsite from '@/directives/clickOutsite';
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

const app = createApp(App)

app.directive('click-outside', clickOutsite);
app.use(ToastPlugin);
app.use(router)
app.mount('#app')
