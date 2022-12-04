import * as VueRouter  from 'vue-router'
import Main from '@/pages/Main.vue'
import Empty from '@/layout/Empty.vue'
import Default from '@/layout/Default.vue'

const routes: VueRouter.RouteRecordRaw[] = [
    {
        path: '/',
        component: Empty,
        children: [
            { path: '/', component: Main }
        ]
    },
    {
        path: '/',
        component: Default,
        children: [
            { path: 'personal-area', component: () => import('../pages/PersonalArea.vue') },
            { path: 'recipe', component: () => import('../pages/Recipe.vue') }
        ]
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})

export default router