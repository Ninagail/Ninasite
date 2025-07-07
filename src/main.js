import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';

createApp(App).use(router).mount('#app')
router.afterEach((to) => {
  if (to.path === '/') {
    document.body.classList.add('home')
  } else {
    document.body.classList.remove('home')
  }
})


