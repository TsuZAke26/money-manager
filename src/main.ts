import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import router from './routes/router';

createApp(App)
	.use(PrimeVue, { theme: { preset: Aura } })
	.use(router)
	.mount('#app');
