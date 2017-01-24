import Vue from 'vue';
import VueRouter from 'vue-router';
import $ from 'jquery';
import routes from './router';
import store from './store';
import common from './component/'; //加载公共组件
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
for (let key in common) {
    console.log('key:'+key);
    Vue.component(key, common[key]);
}
Vue.use(Mint);
Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

const app = new Vue({template: '<router-view></router-view>', router, store }).$mount('#mount');
// expose the app, the router and the store.
// note we are not mounting the app here, since bootstrapping will be
// different depending on whether we are in a browser or on the server.
export { app, router, store }
