import * as VueRouter  from 'vue-router'
import Main from '@/pages/Main.vue'
import Empty from '@/layout/Empty.vue'

const routes: VueRouter.RouteRecordRaw[] = [
    {
        path: '/',
        component: Empty,
        children: [
            { path: '/', component: Main}
        ]
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

export default router