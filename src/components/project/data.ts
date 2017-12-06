// 用户权限, 用来控制 某个用户有哪些按钮
export const permissionMap: { [key: string]: Array<string> } = {
    客户: ["auth", "sign", "audit", "afterMarket"],
    设计部: ["design"],
    商务部: ["auth", "sign", "audit"],
    工程部: ["jobJournal", "assist"],
    仓库: ["delivery"]
};

// 行为映射关系
export const actionMap = {
    auth: "授权",
    sign: "签字",
    afterMarket: "售后申请",
    audit: "审核",
    assist: "协助申请",
    jobJournal: "工作日志",
    design: "设计报价",
    delivery: "发货"
};
export const data = {
    audit: {
        errors: {
            content: ""
        },
        rules: {
            content: [
                {
                    required: true,
                    message: "请填写审核意见",
                    trigger: "blur"
                }
            ]
        },
        data: {
            content: ""
        }
    },
    assist: {
        errors: {
            content: ""
        },
        rules: {
            content: [
                {
                    required: true,
                    message: "请填写审核意见",
                    trigger: "blur"
                }
            ]
        },
        data: {
            content: ""
        }
    },
    jobJournal: {
        errors: {
            content: "",
            date: ""
        },
        rules: {
            date: [
                {
                    required: true,
                    message: "请选择工作日期",
                    trigger: "blur"
                }
            ],
            content: [
                {
                    required: true,
                    message: "请填写审核意见",
                    trigger: "blur"
                }
            ]
        },
        options: [
            {
                value: "enterInto",
                label: "进场照片",
                children: [
                    {
                        value: "admission",
                        label: "进场凭证"
                    },
                    {
                        value: "implement",
                        label: "施工凭证"
                    },
                    {
                        value: "complete",
                        label: "竣工凭证"
                    },
                    {
                        value: "checked",
                        label: "验收凭证"
                    },
                    {
                        value: "other",
                        label: "其他"
                    }
                ]
            },
            {
                value: "leave",
                label: "离场照片",
                children: [
                    {
                        value: "admission",
                        label: "进场凭证"
                    },
                    {
                        value: "implement",
                        label: "施工凭证"
                    },
                    {
                        value: "complete",
                        label: "竣工凭证"
                    },
                    {
                        value: "checked",
                        label: "验收凭证"
                    },
                    {
                        value: "other",
                        label: "其他"
                    }
                ]
            }
        ],
        data: {
            content: "",
            type: [],
            date: new Date(),
            attatchment: []
        }
    },
    design: {
        errors: {
            attatchment: "",
            content: ""
        },
        rules: {
            content: [
                {
                    required: true,
                    message: "请填写报价",
                    trigger: "blur"
                }
            ]
        },
        data: {
            content: "",
            attatchment: []
        }
    },
    delivery: {
        errors: {
            attatchment: "",
            number: ""
        },
        rules: {
            number: [
                {
                    required: true,
                    message: "请填写缺货项",
                    trigger: "blur"
                }
            ]
        },
        data: {
            number: "",
            attatchment: []
        }
    }
};
