import Home from "@/views/Home.vue"
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
    {path: '/', name: "home", component: Home}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router