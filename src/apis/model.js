/*
 * 接口error model
 */

export default {
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
            systemCases: [],
            id: ''
        }
    },
    Download: {
        data: {
            name: '',
            id: '',
            updated: ''
        }
    },
    SystemCase: {
        data: {
            pictures: [],
            id : '',
            title: '',
            summary: '',
            description: '',
            address: '',
            content: '',
            picture: '',
            created: '',
            updated: '',
            systems: []
        }
    },
    Product: {
        data: {
            id: '',
            name: '',
            background: '',
            category: '',
            description: '',
            summary: '',
            techParameter: '',
            domain: '',
            other: '',
            created: '',
            updated: '',
            pictures: []
        }
    },
    User: {
        data: {
            id: '',
            username: '',
            password: '',
            role: '',
            invitation: '',
            status: ''
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
    Login: {
        data: {
            password: '',
            account: ''
        },
        rules: {
            account: [{
                required: true,
                message: '请输入手机、邮箱或授权码',
                trigger: 'blur'
            }],
            password: [{
                required: true,
                message: '请输入密码',
                trigger: 'blur'
            }]
        }
    },
    Registry: {
        data: {
            username: '',
            password: '',
            mobile: '',
            role: '',
            invitation: '',
            captcha: ''
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
            mobile: [{
                required: true,
                message: '请输入手机号码',
                trigger: 'blur'
            }],
            role: [{
                required: true,
                message: '请输入客户类型',
                trigger: 'blur'
            }],
            captcha: [{
                required: true,
                message: '请输入验证码',
                trigger: 'blur'
            }]
        }
    },
    Password: {
        data: {
            password: '',
            password2: '',
            captcha: ''
        },
        rules: {
            password: [{
                required: true,
                message: '请输入登录密码',
                trigger: 'blur'
            }],
            password2: [{
                required: true,
                message: '请确认密码',
                trigger: 'blur'
            }]
        }
    },
    Email: {
        data: {
            email: '',
            captcha: ''
        },
        rules: {
            email: [{
                required: true,
                message: '请输入您的常用邮箱',
                trigger: 'blur'
            }],
            captcha: [{
                required: true,
                message: '验证码',
                trigger: 'blur'
            }]
        }
    },
    Message: {
        data: {
            title: '',
            content: '',
            created: '',
            category: '',
            read: ''
        }
    },
    AuthorizeCode: {
        data: {
            user: '',
            creator: '',
            code: '',
            status: '',
            created: ''
        }
    },
    Invitation: {
        data: {
            code: '',
            creator: '',
            users: '',
            created: ''
        }
    },
    Profile: {
        data: {
            name: '',
            gender: 'male',
            birthday: '',
            company: '',
            addres: '',
            position: ''
        }
    }
};
