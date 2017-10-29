/**
 * 全局vuex方法
 */

const assign = Object.assign;

const state = {
    navBarActive: 0
};

// 使用常量为 Mutations 命名
const GLOABAL_NAVBAR_ACTIVE    = 'GLOABAL_NAVBAR_ACTIVE';

// 纯函数，必需同步
const mutations = {
    [ GLOABAL_NAVBAR_ACTIVE ] (state, payload) {
        // console.log('state: GLOABAL_NAVBAR_ACTIVE:', payload);
        state.navBarActive = payload;
    }
};

const actions = {
    updateNavActive   : ({commit}, payload) => commit('GLOABAL_NAVBAR_ACTIVE', payload)
};

const getters = {
    getNavActive: state => state.navBarActive
};

export default { state, mutations, actions, getters };
