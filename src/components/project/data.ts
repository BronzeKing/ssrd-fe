import { Option } from "utils/extends";

// 用户权限, 用来控制 某个用户有哪些按钮
export const TT = {
    auth: "授权",
    sign: "签字",
    audit: "审核",
    afterMarket: "售后申请",
    design: "设计报价",
    send: "转发",
    jobJournal: "工作日志",
    assist: "协助申请",
    delivery: "发货"
};
// 行为映射关系
export const options = {
    dateType: [
        {
            name: "进场照片",
            label: "进场照片",
            children: Option(["进场凭证", "施工凭证", "竣工凭证", "验收凭证", "其他"], null, null, "label").items
        },
        {
            name: "进场照片",
            label: "离场照片",
            children: Option(["进场凭证", "施工凭证", "竣工凭证", "验收凭证", "其他"], null, null, "label").items
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

export interface FormConfig {
    title: string;
    active: (status: number) => Boolean;
    value: Array<{ key: string; title: string }>;
}

export const FormConfigs: { [key: string]: FormConfig } = {
    [TT.auth]: {
        title: "项目授权",
        active: (status: number) => {
            return true;
        },
        value: [
            { key: "name", title: "项目名称" },
            { key: "auth", title: "授权码名称" },
            { key: "close", title: "取消" },
            { key: "submit", title: "确认" }
        ]
    },
    [TT.send]: {
        title: "需求转发",
        active: (status: number) => {
            return status === 2;
        },
        value: [
            { key: "name", title: "项目名称" },
            { key: "content", title: "备注" },
            { key: "close", title: "取消" },
            { key: "submit", title: "确认" }
        ]
    },
    [TT.sign]: {
        title: "项目签字",
        active: (status: number) => {
            return [5, 9].indexOf(status) > -1;
        },
        value: [
            { key: "name", title: "项目名称" },
            { key: "attatchment", title: "附件" },
            { key: "close", title: "取消" },
            { key: "submit", title: "确认" }
        ]
    },
    [TT.audit]: {
        title: "项目审核",
        active: (status: number) => {
            return 7 < status && status > 3;
        },
        value: [
            { key: "name", title: "项目名称" },
            { key: "content", title: "审核意见" },
            { key: "attatchment", title: "附件" },
            { key: "close", title: "取消" },
            { key: "rejected", title: "驳回" },
            { key: "submit", title: "确认" }
        ]
    },
    [TT.assist]: {
        title: "协助申请",
        active: (status: number) => {
            return status > 6;
        },
        value: [
            { key: "name", title: "项目名称" },
            { key: "content", title: "工作内容" },
            { key: "attatchment", title: "附件" },
            { key: "close", title: "取消" },
            { key: "submit", title: "确认" }
        ]
    },
    [TT.jobJournal]: {
        title: "工作日志",
        active: (status: number) => {
            return status > 7;
        },
        value: [
            { key: "name", title: "项目名称" },
            { key: "date", title: "工作日期" },
            { key: "content", title: "协助内容" },
            { key: "dateType", title: "照片类型" },
            { key: "attatchment", title: "工作照片" },
            { key: "close", title: "取消" },
            { key: "submit", title: "确认" }
        ]
    },
    [TT.design]: {
        title: "上传设计及报价",
        active: (status: number) => {
            return status === 3;
        },
        value: [
            { key: "name", title: "项目名称" },
            { key: "content", title: "报价" },
            { key: "attatchment", title: "设计文件" },
            { key: "close", title: "取消" },
            { key: "submit", title: "确认" }
        ]
    },
    [TT.delivery]: {
        title: "项目发货记录",
        active: (status: number) => {
            return status > 6;
        },
        value: [
            { key: "name", title: "项目名称" },
            { key: "lackingList", title: "缺货清单" },
            { key: "attatchment", title: "缺货清单文件" },
            { key: "close", title: "取消" },
            { key: "submit", title: "确认" }
        ]
    }
};
export interface Permission {
    active: (status: number) => Boolean;
    title?: string;
}
export const Perm: { [key: string]: Permission } = {
    auth: {
        title: TT.auth,
        active: (status: number) => {
            return false;
        }
    },
    send: {
        title: TT.send,
        active: (status: number) => {
            return status !== 2;
        }
    },
    sign: {
        title: TT.sign,
        active: (status: number) => {
            return [5, 9].indexOf(status) < 0;
        }
    },
    audit: {
        title: TT.audit,
        active: (status: number) => {
            return 6 < status || status < 4;
        }
    },
    assist: {
        title: TT.assist,
        active: (status: number) => {
            return status < 7;
        }
    },
    jobJournal: {
        title: TT.jobJournal,
        active: (status: number) => {
            return status < 8;
        }
    },
    design: {
        title: TT.design,
        active: (status: number) => {
            return status !== 3;
        }
    },
    delivery: {
        title: TT.delivery,
        active: (status: number) => {
            return status < 7;
        }
    },
    afterMarket: {
        title: TT.afterMarket,
        active: (status: number) => {
            return false;
        }
    }
};
export const permissionMap: { [key: string]: Array<Permission> } = {
    客户: [Perm.auth, Perm.sign, Perm.audit, Perm.afterMarket],
    设计部: [Perm.design],
    商务部: [Perm.auth, Perm.send, Perm.audit],
    工程部: [Perm.jobJournal, Perm.assist],
    仓库: [Perm.delivery]
};
