import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import clickOutsite from '@/directives/clickOutsite';

const app = createApp(App)

app.directive('click-outside', clickOutsite);
app.use(router)
app.mount('#app')
