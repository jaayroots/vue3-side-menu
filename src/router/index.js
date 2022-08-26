import { createRouter, createWebHistory } from 'vue-router'
import MyNote from '../views/MyNote.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: MyNote
		},
		{
			path: '/about',
			component: () => import('../views/About.vue')
		},
	],
})

export default router