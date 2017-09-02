import Vue from 'vue';
import Router from 'vue-router';

import views from './modules/views';
const login = r => require.ensure([], () => r(require('pages/login')), 'login');
const error = r => require.ensure([], () => r(require('pages/views/error')), 'views');
// const viewsPage = r => require.ensure([], () => r(require('pages/views/views')), 'views');

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            // name: 'views',
            redirect: 'views'
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/error',
            name: 'error',
            component: error
        },
        views
    ]
});
