import Vue from 'vue';
import Router from 'vue-router';
import homePage from '../containers/homePage.vue';
import register from '../containers/register.vue';
import login from '../containers/login.vue';
import create from '../containers/create.vue';
import topic from '../containers/topic.vue';

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
        }, {
            path: '/create',
            component: create
        }, {
            path: '/topic/:id',
            component: topic
        }
    ]
});
