/**
 * 全局vuex方法
 */

import * as types from './types';
const assign = Object.assign;

const state = {
    user: {},
    isAuthenticated: false
};

// 纯函数，必需同步
const mutations = {
    [ types.LOGIN ] (state, payload) {
        state.user = assign({}, state.user, payload);
        state.isAuthenticated = true;
    },
    [ types.LOGOUT ] (state) {
        state.isAuthenticated = false;
    }
};

const actions = {
    login: ({commit}, payload) => commit(types.LOGIN, payload),
    logout: ({commit}) => commit(types.LOGOUT)
};

const getters = {
    getUser: state => state.user
};

export default { state, mutations, actions, getters };
