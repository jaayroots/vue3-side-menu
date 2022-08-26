import { createRouter, createWebHistory } from 'vue-router'
import MyNote from '../views/MyNote.vue'
import CreateNote from '../views/CreateNote.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: MyNote
		},
		{
			path: '/createNote',
			component: CreateNote
		},
	],
})

export default router