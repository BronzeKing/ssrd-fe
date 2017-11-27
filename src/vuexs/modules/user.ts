/**
 * 全局vuex方法
 */

import * as types from "./types";
import { assign } from "common/utils/extends";
import { Login, Cart } from "apis";
import { type } from "os";

const state = {
    user: { verified: { email: false, mobile: false } },
    authenticated: Boolean(localStorage.token),
    cart: []
};

// 纯函数，必需同步
const mutations = {
    [types.LOGIN](state: any, payload: any) {
        state.user = assign({}, state.user, payload);
        state.authenticated = true;
    },
    [types.TOKEN](state: any, payload: any) {
        localStorage.token = "Bearer " + payload.token;
    },
    [types.LOGOUT](state: any) {
        state.user = {};
        state.authenticated = false;
        delete localStorage.token;
    },
    [types.ADDCART](state: any, payload: any) {
        state.cart.push(payload)
    },
    [types.CLEARCART](state: any) {
        state.cart = []
    }
};

const actions = {
    logout: ({ commit }: any) => commit(types.LOGOUT),
    async login({ dispatch, commit }: any, payload: any) {
        await Login.create(payload).then((r: Payload) => {
            commit(types.TOKEN, r);
        });
        await Login.retrieve().then((r: any) => {
            commit(types.LOGIN, r);
        });
    },
    // 添加到购物车
    async addCart ({ dispatch, commit, state }: any, payload: any) {
        commit(types.ADDCART, payload)
        Cart.create({content: state.cart}).then(r => {
        })
    }

};

const getters = {
    user: (state: any) => state.user,
    authenticated: (state: any) => state.authenticated,
    cart: (state: any) => state.cart
};

export default { state, mutations, actions, getters };
