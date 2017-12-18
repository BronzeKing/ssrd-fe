// 用户权限, 用来控制 某个用户有哪些按钮
export const permissionMap: { [key: string]: Array<string> } = {
    客户: ["授权", "签字", "审核", "售后申请"],
    设计部: ["设计报价"],
    商务部: ["授权", "签字", "审核"],
    工程部: ["工作日志", "协助申请"],
    仓库: ["发货"]
};

// 行为映射关系
export const options = {
    dateType: [
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
    ]
};

export const rules = {
    date: [
        {
            required: true,
            message: "请选择工作日期",
            trigger: "blur"
        }
    ],
    lackingList: [
        {
            required: true,
            message: "请填写缺货项",
            trigger: "blur"
        }
    ]
};
export const errors = {
    date: "",
    lackingList: ""
};
