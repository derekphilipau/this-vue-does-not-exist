import Vue from 'vue'
import Router from 'vue-router'
import OriginalsView from './views/OriginalsView.vue'
import FakesView from './views/FakesView.vue'
import QinghuaView from './views/QinghuaView.vue'
import DiverseView from './views/DiverseView.vue'
import HybridView from './views/HybridView.vue'
import About from './views/AboutView.vue'
import VideoView from './views/VideoView.vue'
// import RandomFakeView from './views/RandomFakeView.vue'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    linkExactActiveClass: 'is-active',
    routes: [{
            path: '/',
            component: VideoView,
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
            path: '/qinghua',
            name: 'qinghua',
            component: QinghuaView
        },
        {
            path: '/diverse',
            name: 'diverse',
            component: DiverseView
        },
        {
            path: '/hybrids',
            name: 'hybrids',
            component: HybridView
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})