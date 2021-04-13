import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'

const Interview = () => import( /* webpackChunkName: "Interview" */'@/views/Interview.vue')
const checkin = () => import( /* webpackChunkName: "Interview" */'@/views/checkin.vue')


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import( '../views/Login.vue')
    },
    {
        path: '/restorePass',
        name: 'Restorepassword',
        component: () => import( '../views/restorePass.vue')
    },
    {
        path: '/loading',
        name: 'Loading',
        component: () => import( '../views/Loading.vue')
    },
    {
        path: '/interview',
        name: 'Interview',
        component: Interview
    },
    {
        path: '/checkin',
        name: 'checkin',
        component: checkin
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
