/*
 * 接口error model
 */

export default {
    login: {
        username: [
            { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
        ]
    },
    registry: {
        username: [
            { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        email:[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' }
        ]
    },
    jobs: {
        name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' }
        ],
        mobile: [
            { required: true, message: '请输入电话', trigger: 'blur' }
        ],
        email: [
            { required: true, message: '请选择邮箱', trigger: 'blur' }
        ]
    }
};
