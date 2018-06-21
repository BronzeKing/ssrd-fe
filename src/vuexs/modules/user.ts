/**
 * 全局vuex方法
 */

import * as types from "./types";
import { assign, makeContent, makeMap, n2br } from "common/utils/extends";
import { System, Login, Cart } from "apis";
import storage from "common/utils/member";
import { type } from "os";

const state = {
    user: { verified: { email: false, mobile: false }, profile: { avator: "" }, group: {} },
    authenticated: Boolean(storage.getCredential()),
    cart: []
};

// 纯函数，必需同步
const mutations = {
    [types.LOGIN](state: any, payload: any) {
        state.user = assign({}, state.user, payload);
        state.authenticated = true;
    },
    [types.TOKEN](state: any, payload: any) {
        storage.setCredential("Bearer " + payload.token);
    },
    [types.LOGOUT](state: any) {
        state.user = {};
        state.authenticated = false;
        state.cart = [];
        storage.clear();
    },
    // 添加到购物车
    [types.ADDCART](state: any, payload: any) {
        state.cart.push(payload);
    },
    // 清空购物车
    [types.CLEARCART](state: any) {
        state.cart = [];
    },
    // 从后台获取购物车数据
    [types.CART](state: any, payload: Array<any>) {
        state.cart = payload;
    }
};

const actions = {
    logout: ({ commit }: any) => commit(types.LOGOUT),
    async login({ dispatch, commit }: any, payload: any) {
        await Login.create(payload).then((r: Payload) => {
            dispatch("token", r);
        });
    },
    async token({ dispatch, commit }: any, token: any) {
        commit(types.TOKEN, token);
        await Login.retrieve().then((r: any) => {
            // 等待获取用户数据完毕
            commit(types.LOGIN, r);
        });
    },
    // 添加到购物车
    async addCart({ dispatch, commit, state }: any, cart: any) {
        commit(types.ADDCART, cart);
        Cart.create({ content: state.cart });
    },
    async updateCart({ dispatch, commit, state }: any, carts: any) {
        commit("cart", carts);
        Cart.create({ content: carts });
    },
    async destroyCart({ dispatch, commit, status }: any) {
        state.cart.map((item: any) => {
            Cart.destroy({ id: item.id });
        });
        commit("cart", []);
    },
    cart({ commit, state }: any) {
        Cart.retrieve().then((r: Array<any>) => {
            commit("cart", r);
        });
    }
};

const getters = {
    user: (state: any) => state.user,
    authenticated: (state: any) => state.authenticated,
    cart: (state: any) => {
        return state.cart.map((item: any) => {
            return { text: n2br(makeContent(item.content)), ...item };
        });
    }
};

export default { state, mutations, actions, getters };
