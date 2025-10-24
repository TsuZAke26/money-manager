import { createRouter, createWebHistory } from 'vue-router';
import AuthView from '../pages/AuthView.vue';
import HomeView from '../pages/HomeView.vue';

const routes = [
	{
		path: '/auth',
		name: 'auth',
		component: AuthView,
	},
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
