export const Project = {
    name: [
        { required: true, message: '请输入名称', trigger: 'blur' },
    ],
    linkman: [
        { required: true, message: '请输入联系人', trigger: 'blur' },
    ],
    budget: [
        { type: 'number', required: true, message: '请输入预算', trigger: 'blur' },
    ],
    duration: [
        { type: 'number', required: true, message: '请输入工期', trigger: 'blur' },
    ],
    mobile: [
        { required: true, message: '请输入手机', trigger: 'blur' },
    ]
}