/**
 * 全局vuex方法
 */

const assign = Object.assign;

const state = {
    loading: {
        show: false,
        text: ''
    },
    popDialog: {
        showDialog: false,
        isAlert: false,                                 // 是否只显示一个操作按钮
        header: null,                                   // 弹出框  标题
        content: null,                                  // 弹出框内容文本
        cancel: null,                                   // 弹出框的`取消`按钮文本
        footer: null,                                   // 弹出框的`确定`按钮文本
        showCloseBtn: false,                            // 是否显示关闭按钮
        btnEvent () {},                                 // 点击确定按钮事件
        cancelEvent () {}                               // 点击取消按钮事件
    },
    navBar          : {
        show        :false,
        activeTab   :0
    }
};

// 使用常量为 Mutations 命名
const GLOABAL_UPDATE_LOADING    = 'GLOABAL_UPDATE_LOADING';
const GLOABAL_LOGIN             = 'GLOABAL_LOGIN';
// const GLOABAL_UPDATE_TITLEBAR   = 'GLOABAL_UPDATE_TITLEBAR';
const GLOABAL_OPERATE_NAVBAR    = 'GLOABAL_OPERATE_NAVBAR';
const GLOABAL_SWITCH_NAVTAB     = 'GLOABAL_SWITCH_NAVTAB';
const GLOABAL_OPERATE_DIALOG    = 'GLOABAL_OPERATE_DIALOG';
// const GLOABAL_OPERATE_BACK      = 'GLOABAL_OPERATE_BACK';

// 纯函数，必需同步
const mutations = {
    [ GLOABAL_UPDATE_LOADING ] (state, payload) {
        state.loading = payload;
    },
    [ GLOABAL_LOGIN ] (state, payload) {},
    // 显隐导航栏
    [ GLOABAL_OPERATE_NAVBAR ] (state, payload) {
        state.navBar.show = payload;
    },
    [ GLOABAL_SWITCH_NAVTAB ] (state, payload) {
        state.navBar.activeTab = payload;
    },
    [ GLOABAL_OPERATE_DIALOG ] (state, payload) {
        state.popDialog = assign(state.popDialog, payload);
    }
    // [ GLOABAL_OPERATE_BACK ] (state, payload) {
    //     state.backBehaviour = assign(state.backBehaviour, payload);
    // }
    // [ GLOABAL_UPDATE_TITLEBAR ] (state, payload) {
    //     state.titleBar = assign(state.titleBar, payload);
    // }
};

const actions = {
    updateLoading   : ({commit}, payload) => commit('GLOABAL_UPDATE_LOADING', payload),
    mcLogin         : ({commit}, payload) => commit('GLOABAL_LOGIN', payload),
    operateNavBar   : ({commit}, payload) => commit('GLOABAL_OPERATE_NAVBAR', payload),
    switchNavTab    : ({commit}, payload) => commit('GLOABAL_SWITCH_NAVTAB', payload),
    operateDialog   : ({commit}, payload) => commit('GLOABAL_OPERATE_DIALOG', payload)
    // operateBack     : ({commit}, payload) => commit('GLOABAL_OPERATE_BACK', payload)
};

const getters = {
    getLoadingStatus: state => state.loading,
    // showTitleBar: state => state.titleBar
    navBarStatus: state => state.navBar,
    dialogConfig: state => state.popDialog
    // backStatus  : state => state.backBehaviour
};

export default { state, mutations, actions, getters };
