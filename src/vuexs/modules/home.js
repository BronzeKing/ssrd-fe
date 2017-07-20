/**
 * 全局vuex方法
 */

const assign = Object.assign;

const state = {
    homeData: 'loading'
};

// 使用常量为 Mutations 命名
const GLOABAL_UPDATE_HOME    = 'GLOABAL_UPDATE_HOME';

// 纯函数，必需同步
const mutations = {
    [ GLOABAL_UPDATE_HOME ] (state, payload) {
        state.homeData = assign({}, state.homeData, payload);
    }
};

const actions = {
    updateHome   : ({commit}, payload) => commit('GLOABAL_UPDATE_HOME', payload)
};

const getters = {
    gethomeData: state => state.homeData
};

export default { state, mutations, actions, getters };
