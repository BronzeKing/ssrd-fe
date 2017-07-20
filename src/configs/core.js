// 当前文件私有函数
const _private = {
    init () {
        let tid               = null;                                               // timeout instance

        this.refreshRem();
        // 监听页面resize事件 页面大小一改变就重新设置viewport
        window.addEventListener('resize', () => {
            clearTimeout(tid);
            tid = setTimeout(this.refreshRem, 300);
        }, false);
    },
    // 设置页面缩放比例
    refreshRem () {
        let scale             = 1.0;                                                // 页面缩放比例
        let ratio             = 1;                                                  // 缩放比率
        let isAndroid         = window.navigator.appVersion.match(/android/gi);     // 是否安卓机
        let isIPhone          = window.navigator.appVersion.match(/iphone/gi);      // 是否iphon
        let devicePixelRatio  = window.devicePixelRatio;                            // dpr

        // 如果是IPHONE就按照dpr缩放排版，否则统一按照dpr1处理
        if (isIPhone) {
            scale /= devicePixelRatio;
            ratio *= devicePixelRatio;
        }

        // 设置viewport内容
        const viewport        = document.getElementById('viewport');
        const content         = `initial-scale=${scale}, maximum-scale=${scale},minimum-scale=${scale}, width=device-width, user-scalable=no`;
        viewport && viewport.setAttribute('content', content);
        // const text          = `<meta name="viewport" content="initial-scale=${scale}, maximum-scale=${scale},minimum-scale=${scale}, width=device-width, user-scalable=no" />`;
        // 设置根font-size
        document.documentElement.style.fontSize = `${625 * ratio}%`;
    },
    empty () {}
};

// 构造函数Core
class Core {

    constructor (Vue) {
        this.Vue = Vue;
        // 多设备适配方案
        _private.init();
    }

    // 显示loading Toast
    openLoading (text) {
        this.Vue.commit('GLOABAL_UPDATE_LOADING', {
            show: true,
            text: text
        });
    }

    // 显示loading Toast
    closeLoading (text) {
        this.Vue.commit('GLOABAL_UPDATE_LOADING', {
            show: false,
            text: text
        });
    }

    // 打开确认弹出框
    openPopConfirm (options = {}) {
        options.show           = true;
        // Object.assign({}, option);
        this.Vue.commit('GLOABAL_UPDATE_LOADING', options);
    }

}

export default (Vue) => {
    Vue.prototype.$core             = new Core(Vue);
};
