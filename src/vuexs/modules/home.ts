/**
 * 全局vuex方法
 */
import * as types from "./types";
import { assign } from "common/utils/extends";

const state = {
    homeData: "loading",
    env: {}
};

// 使用常量为 Mutations 命名
const GLOABAL_UPDATE_HOME = "GLOABAL_UPDATE_HOME";

// 纯函数，必需同步
const mutations = {
    [GLOABAL_UPDATE_HOME](state: any, payload: any) {
        state.homeData = assign({}, state.homeData, payload);
    },
    [types.ENV](state: any, payload: any) {
        state.env = assign({}, state.env, payload);
    }
};

const actions = {
    updateHome: ({ commit }: any, payload: any) => commit("GLOABAL_UPDATE_HOME", payload),
    env: ({ commit }: any, payload: any) => commit(types.ENV, payload)
};

const getters = {
    gethomeData: (state: any) => state.homeData,
    env: (state: any) => state.env
};

export default { state, mutations, actions, getters };
