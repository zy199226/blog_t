import Vue from 'vue';
import Router from 'vue-router';
import homePage from '../containers/homePage.vue';
import register from '../containers/register.vue';
import login from '../containers/login.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: homePage
        }, {
            path: '/register',
            component: register
        }, {
            path: '/login',
            component: login
        }
    ]
});
