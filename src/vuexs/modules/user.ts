/**
 * 全局vuex方法
 */

import * as types from "./types";
import { assign } from "common/utils/extends";
import { Login } from 'apis';

const state = {
  user: {verified: {email: false, mobile: false}},
  authenticated: Boolean(localStorage.token)
};

// 纯函数，必需同步
const mutations = {
  [types.LOGIN](state: any, payload: any) {
    state.user = assign({}, state.user, payload);
    state.authenticated = true;
  },
  [types.TOKEN](state: any, payload: any) {
    localStorage.token = 'Bearer ' + payload.token;
  },
  [types.LOGOUT](state: any) {
    state.user = {};
    state.authenticated = false;
    delete localStorage.token;
  }
};

const actions = {
  login: ({ commit }: any, payload: any) => commit(types.LOGIN, payload),
  logout: ({ commit }: any) => commit(types.LOGOUT)
};

const getters = {
  user: (state: any) => state.user,
  authenticated: (state: any) => state.authenticated
};

export default { state, mutations, actions, getters };
