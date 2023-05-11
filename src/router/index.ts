import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView2.vue'

// @ts-ignore
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/About.vue')
        },
        {
            path: '/process',
            name: 'process',
            component: () => import('../views/Process.vue')
        }
    ]
})

export default router
