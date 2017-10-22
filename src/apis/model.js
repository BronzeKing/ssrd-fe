/*
 * 接口error model
 */

export default {
    login: {
        username: [{
            required: true,
            message: '请输入姓名',
            trigger: 'blur'
        }],
        password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
        }]
    },
    registry: {
        username: [{
            required: true,
            message: '请输入姓名',
            trigger: 'blur'
        }],
        password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
        }],
        email: [{
            required: true,
            message: '请输入邮箱地址',
            trigger: 'blur'
        }]
    },
    jobs: {
        name: [{
            required: true,
            message: '请输入姓名',
            trigger: 'blur'
        },
        {
            min: 2,
            max: 20,
            message: '长度在 2 到 20 个字符',
            trigger: 'blur'
        }],
        mobile: [{
            required: true,
            message: '请输入电话',
            trigger: 'blur'
        }],
        email: [{
            required: true,
            message: '请选择邮箱',
            trigger: 'blur'
        }],
        attatchment: [{
            required: true,
            message: '请选择附件'
        }]
    },
    Job: {
        data: {
            job: '',
            name: '',
            mobile: '',
            email: '',
            attatchment: ''
        },
        rules: {
            name: [{
                required: true,
                message: '请输入姓名',
                trigger: 'blur'
            },
            {
                min: 2,
                max: 20,
                message: '长度在 2 到 20 个字符',
                trigger: 'blur'
            }],
            mobile: [{
                required: true,
                message: '请输入电话',
                trigger: 'blur'
            }],
            email: [{
                required: true,
                message: '请选择邮箱',
                trigger: 'blur'
            }],
            attatchment: [{
                required: true,
                message: '请选择附件'
            }]
        }
    },
    Register: {
        data: {
            username: '',
            password: '',
            email: ''
        },
        rules: {
            username: [{
                required: true,
                message: '请输入姓名',
                trigger: 'blur'
            }],
            password: [{
                required: true,
                message: '请输入密码',
                trigger: 'blur'
            }],
            email: [{
                required: true,
                message: '请输入邮箱地址',
                trigger: 'blur'
            }]
        }
    },
    Login: {
        data: {
            username: '',
            password: ''
        },
        rules: {
            username: [{
                required: true,
                message: '请输入姓名',
                trigger: 'blur'
            }],
            password: [{
                required: true,
                message: '请输入密码',
                trigger: 'blur'
            }]
        }
    },
    Recruitment: {
        data: {
            name: '',
            address: '',
            salary: '',
            number: '',
            jobResponsibilities: '',
            jobDetail: ''
        }
    },
    News: {
        data: {
            title: '',
            content: '',
            id: '',
            created: ''
        }
    },
    Faqs: {
        data: {
            questioin: '',
            answer: '',
            id: '',
            created: ''
        }
    },
    System: {
        data: {
            introduction: '',
            structure: '',
            funtionalFeature: '',
            summary: '',
            summaryPicture: '',
            pictures: [],
            systemDemonstration: [],
            id: ''
        }
    },
    Download: {
        data: {
            name: '',
            id: '',
            updated: ''
        }
    }
};
