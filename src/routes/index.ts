import { createRouter, createWebHistory } from "vue-router";
import LoginRegister from './loginregister'
import Topic from './topics'
 
 
const routes = [
    {
        path: '/',
        name: 'HomeView',
        rediect: '/popular',
        component: () => import('@/view/HomeView/HomeView.vue'),
        meta: {
            title: '首页',
            requireAuth: false
        },
        children: [
            {
                path: 'popular',
                name: 'popular',
                component: () => import ('@/view/HomeView/DefaultContent/DefaultContent.vue'),
                meta: {
                    title: '热门',
                    requireAuth: false
                }
            },
            Topic
        ]
    },
    LoginRegister
]
// 路由
const router = createRouter({
    history: createWebHistory(),
    routes
})
// 导出
export default router 