import Vue from 'vue';
import Router from 'vue-router';

import Hello from 'src/components/Hello';
import Home from './modules/home';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/views',
            name: 'Hello',
            component: Hello,
            children: {
                ...Home
            }
        }
    ]
});
