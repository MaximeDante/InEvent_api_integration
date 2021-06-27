import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue'),
        default: true,
    },
    {
        path: '/signin',
        name: 'signin',
        component: () => import('@/views/SignIn.vue'),
    },
    {
        path: '/attendees',
        name: 'attendees',
        component: () => import('@/views/Attendees.vue'),
    },
]

Vue.router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default Vue.router