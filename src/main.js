import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)

//Vue.http.headers.common['Access-Control-Allow-Origin'] = true;
//Vue.http.headers.common['Access-Control-Request-Method'] = '*';
//window.axios.defaults.headers.common = {
//'Accept': 'application/json',
//'Content-Type': 'application/json'
//};
//import VueGridLayout from 'vue-grid-layout'

//require('../node_modules/exif-js/exif-js')
//import './assets/css/bootstrap.min.css';
//import '../node_modules/exif-js/exif-js'

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')