import Vue from 'vue'
import Router from 'vue-router'
import OriginalsView from './views/OriginalsView.vue'
import FakesView from './views/FakesView.vue'
import About from './views/AboutView.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkExactActiveClass: 'is-active',
    routes: [{
            path: '/',
            redirect: { name: 'fakes' },
            name: 'home',
        },
        {
            path: '/originals',
            name: 'originals',
            component: OriginalsView
        },
        {
            path: '/fakes',
            name: 'fakes',
            component: FakesView
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})