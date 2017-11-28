/**
 * 全局vuex方法
 */

import * as types from "./types";
import { assign, makeContent, makeMap } from "common/utils/extends";
import { System, Login, Cart } from "apis";
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
    // 添加到购物车
    [types.ADDCART](state: any, payload: any) {
        state.cart.push(payload)
    },
    // 清空购物车
    [types.CLEARCART](state: any) {
        state.cart = []
    },
    // 从后台获取购物车数据
    [types.CART](state: any, payload: Array<any>) {
        state.cart = payload
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
    async addCart ({ dispatch, commit, state }: any, cart: any) {
        await System.list().then((r: any) => { // 从后台获取购物车的图片
            let map = makeMap(r.Records)
            cart['picture'] = map[cart.name].picture
            commit(types.ADDCART, cart)
        });
        Cart.create({content: state.cart})
    },
    cart ({commit, state}: any) {
        Cart.retrieve().then((r: Array<any>) => {
            commit('cart', r)
        })
    }
};

const getters = {
    user: (state: any) => state.user,
    authenticated: (state: any) => state.authenticated,
    cart: (state: any) => {
        return state.cart.map((item: any) => {
            return {content: makeContent(item), ...item}
        })
    }
};

export default { state, mutations, actions, getters };
