import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('@/views/Home')
        },
        {
            name: 'profile',
            path: '/profile/:username',
            component: () => import('@/views/UserProfile')
        },
        {
            name: 'search',
            path: '/search',
            beforeEnter(to, from, next) {
                if (!to.query['query']) {
                    next('/')
                }

                next()
            }
        },
        {
            path: '/routes',
            component: () => import('@/views/RoutesList')
        },
        {
            path: '*'
            // redirect: '/'
        }
    ]
})
