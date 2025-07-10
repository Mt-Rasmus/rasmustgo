import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import App from './App.vue';
import router from './router';

// Create app first
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);

// Mount the app after restoring the route
router.isReady().then(() => {
  const redirectPath = sessionStorage.getItem('redirectPath');
  if (redirectPath) {
    sessionStorage.removeItem('redirectPath');
    router.replace(redirectPath); // 👈 key change here
  }

  app.mount('#app');
});
