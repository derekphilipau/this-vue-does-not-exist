import Vue from 'vue'
import Router from 'vue-router'
import OriginalsView from './views/OriginalsView'
import FakesView from './views/FakesView'
import QinghuaView from './views/QinghuaView'
import DiverseView from './views/DiverseView'
import HybridView from './views/HybridView'
import DressView from './views/DressView'
import AboutView from './views/AboutView'
import ArtistStatements from './views/ArtistStatements'

// import VideoView from './views/VideoView'
// import RandomFakeView from './views/RandomFakeView'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    linkExactActiveClass: 'is-active',
    routes: [{
            path: '/',
            component: AboutView,
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
            path: '/dresses',
            name: 'dresses',
            component: DressView
        },
        {
            path: '/statements',
            name: 'statements',
            component: ArtistStatements
        },
        {
            path: '/about',
            redirect: '/'
        }
    ]
})