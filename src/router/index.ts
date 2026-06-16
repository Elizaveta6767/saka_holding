import {
    createRouter,
    createWebHistory
} from "vue-router"
import HomePage from "../pages/HomePage.vue"
import CatalogPage from "../pages/CatalogPage.vue"

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage},
        { path: '/catalog', name: 'catalog', component: CatalogPage }
    ]
})