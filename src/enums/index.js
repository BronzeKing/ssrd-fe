/**
 * 该文件主要方式枚举相关文件
 */

import Enums from './enums';
export {
    SMS_SEND_TYPE                  // 发送短信验证码类型枚举
};

// console.log(ENUMS);
const SMS_SEND_TYPE = Enums({
    register: {
        text: '注册',
        value: 1
    },
    forget: {
        text: '忘记密码',
        value: 2
    },
    setPassword: {
        text: '设置密码',
        value: 4
    },
    resetPassword: {
        text: '重置密码',
        value: 8
    }
});
