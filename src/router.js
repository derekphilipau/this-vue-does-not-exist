import Vue from 'vue'
import Router from 'vue-router'
import OriginalsView from './views/OriginalsView.vue'
import FakesView from './views/FakesView.vue'
import About from './views/AboutView.vue'
import RandomFakeView from './views/RandomFakeView.vue'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    linkExactActiveClass: 'is-active',
    routes: [{
            path: '/',
            component: RandomFakeView,
            name: 'home'
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