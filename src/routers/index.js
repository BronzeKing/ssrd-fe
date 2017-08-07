import Vue from 'vue';
import Router from 'vue-router';

import views from './modules/views';
// const viewsPage = r => require.ensure([], () => r(require('pages/views/views')), 'views');

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            // name: 'views',
            redirect: 'views'
        },
        views
    ]
});
