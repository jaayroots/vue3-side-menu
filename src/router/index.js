import { createRouter, createWebHistory } from 'vue-router'
import MyNote from '../views/MyNote.vue'
import MyNoteV2 from '../views/MyNoteV2.vue'
import CreateNote from '../views/CreateNote.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: MyNote
		},
		{
			path: '/notev2',
			component: MyNoteV2
		},
		{
			path: '/createNote',
			component: CreateNote
		},
	],
})

export default router