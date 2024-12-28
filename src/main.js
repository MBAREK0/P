import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';
import './assets/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { createI18n } from 'vue-i18n';

// Import locale messages
import en from './locales/en.json';
import fr from './locales/fr.json';

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

// Create the i18n instance
const i18n = createI18n({
    legacy: false, // Ensure legacy mode is disabled
    locale: 'en', // Set the default locale
    messages: {
      en,
      fr,
    },
  });

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(i18n);
app.use(VueToast);
app.mount('#app');

