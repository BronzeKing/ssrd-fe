/**
 * vuex相关的处理
 */
import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import global           from './modules/global';
import home             from './modules/home';
import user             from './modules/user';

Vue.use(Vuex);

// 是否开启vuex logger。
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    strict: debug,
    plugins: debug ? [createLogger()] : [],
    modules: {
        global,
        user,
        home
    }
});
