/**
 * 全局vuex方法
 */

import * as types from "./types";
import { assign } from "common/utils/extends";
import { Login } from 'apis';

const state = {
  user: {},
  isAuthenticated: false
};

// 纯函数，必需同步
const mutations = {
  [types.LOGIN](state: any, payload: any) {
    state.user = assign({}, state.user, payload);
    state.isAuthenticated = true;
  },
  [types.TOKEN](state: any, payload: any) {
    localStorage.token = 'Bearer ' + payload.token;
  },
  [types.LOGOUT](state: any) {
    state.isAuthenticated = false;
    state.user = {};
    delete localStorage.token;
  }
};

const actions = {

};

const getters = {
  user: (state: any) => state.user
};

export default { state, mutations, actions, getters };
