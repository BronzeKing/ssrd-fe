import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import { Option } from "common/utils/extends";
import { System, ProjectCreate as Project, Profile } from "apis";

@Component
export default class ProjectCreateDetailView extends Vue {
    @Provide() System = System;
    @Provide() Project = Project;
    @Provide() Profile = Profile;
    @Provide() dataSet = dataSet;
    @Provide() index = {};

    @Provide()
    $refs: {
        form: HTMLFormElement;
        settleForm: HTMLFormElement;
    };

    protected created() {
        const paramsId = Number(this.$route.params.id);
        System.list().then((r: any) => {
            System.t.Records.map(item => {
                if (item.id === paramsId) {
                    System.m.populate(item);
                }
            });
        });
    }
    submit() {
        this.$router.push({ name: "settleCart" });
    }
    addToCart() {
        let item;
        dataSet.forEach(x => {
            if (x.name === System.m.name) {
                item = x;
                item["id"] = String(System.m.id);
                item["picture"] = System.m.picture;
            }
        });
        console.log(item);
        this.$store.dispatch("addCart", item).then(() => {
            this.$message({
                message: "添加成功",
                type: "success"
            });
            this.$router.push({ name: "projectCreate" });
        });
    }

    cancel() {
        this.$refs.form.resetFields();
    }
}
/*
 * multiInput 多输入
 * multiCheck 多选
 * input    输入数字
 * inputText    输入文字
 * checkBox 单选
 */
const dataSet = [
    {
        name: "可视化劳务管理",
        picture: "",
        type: "system",
        id: "",
        content: [
            {
                name: "区域大门数量",
                type: "multiInput",
                value: [],
                items: [
                    { name: "施工区", unit: "个", value: "" },
                    { name: "生活区", unit: "个", value: "" },
                    { name: "其他", unit: "个", value: "" }
                ]
            },
            {
                name: "闸机",
                type: "multiInput",
                items: [
                    { name: "三辊闸", unit: "个", value: "" },
                    { name: "翼闸", unit: "个", value: "" },
                    { name: "摆动闸", unit: "个", value: "" }
                ]
            },
            {
                name: "通行方式",
                type: "multiInput",
                items: [
                    { name: "IC卡", unit: "张", value: "" },
                    { name: "人脸识别", unit: "个", value: "" }
                ]
            },
            {
                name: "扩展功能",
                type: "multiCheck",
                value: [],
                items: [{ name: "通道抓拍" }, { name: "LED实时显示" }, { name: "LED大屏显示" }]
            },
            {
                name: "发卡中心",
                type: "multiCheck",
                value: [],
                items: [{ name: "岗亭" }, { name: "办公室" }, { name: "其他" }]
            },
            { name: "入场劳务人员数量", type: "input", value: "", unit: "人" },
            { name: "备注", type: "inputText", value: "" }
        ]
    },
    {
        name: "智能化视频监控",
        picture: "",
        type: "system",
        id: "",
        content: [
            {
                name: "区域选择",
                type: "multiCheck",
                value: [],
                items: [
                    { name: "施工区", num: "" },
                    { name: "生活区", num: "" },
                    { name: "其他", num: "" }
                ]
            },
            {
                name: "监控位置",
                type: "multiInput",
                items: [
                    { name: "塔吊监控", unit: "个", value: "" },
                    { name: "人员通道", unit: "个", value: "" },
                    { name: "车辆出入口", unit: "个", value: "" },
                    { name: "围墙监控", unit: "个", value: "" },
                    { name: "材料堆场", unit: "个", value: "" },
                    { name: "就餐区监控", unit: "个", value: "" },
                    { name: "地磅监控", unit: "个", value: "" },
                    { name: "电梯口", unit: "个", value: "" },
                    { name: "高空抛物", unit: "个", value: "" }
                ]
            },
            {
                name: "现场施工图纸",
                type: "checkBox",
                value: "",
                items: [{ name: "有" }, { name: "无" }, { name: "其他" }]
            },
            { name: "备注", type: "inputText", value: "" }
        ]
    },
    {
        name: "专业工地车辆出入管理",
        picture: "",
        type: "system",
        id: "",
        content: [
            { name: "大门数量", type: "input", value: "" },
            {
                name: "尺寸",
                type: "multiInput",
                items: [
                    { name: "长", value: "" },
                    { name: "宽", value: "" },
                    { name: "高", value: "" }
                ]
            },
            {
                name: "模式选择",
                type: "multiCheck",
                value: [],
                items: [{ name: "双枪击模式" }, { name: "四枪机模式" }]
            },
            {
                name: "功能选择",
                type: "multiCheck",
                value: [],
                items: [{ name: "车牌抓拍" }, { name: "车身抓拍" }]
            },
            { name: "备注", type: "inputText", value: "" }
        ]
    },
    {
        name: "综合数据采集远程传输",
        picture: "",
        type: "system",
        id: "",
        content: [
            {
                name: "区域选择",
                type: "multiInput",
                items: [
                    { name: "施工区", value: "" },
                    { name: "生活区", value: "" },
                    { name: "其他", value: "" }
                ]
            },
            {
                name: "功能选择",
                type: "multiCheck",
                value: [],
                items: [
                    { name: "噪声采集" },
                    { name: "粉尘采集" },
                    { name: "风速采集" },
                    { name: "风向采集" },
                    { name: "温度采集" },
                    { name: "湿度采集" },
                    { name: "PM值采集" },
                    { name: "PM2.5采集" }
                ]
            },
            {
                name: "显示方式",
                type: "multiCheck",
                value: [],
                items: [{ name: "LED屏显示" }, { name: "后台LCD显示" }]
            },
            { name: "备注", type: "inputText", value: "" }
        ]
    },
    {
        name: "塔机安全防碰撞系统",
        picture: "",
        type: "system",
        id: "",
        content: [
            {
                name: "类型",
                type: "multiInput",
                items: [
                    { name: "塔吊防碰撞", unit: "台", value: "" },
                    { name: "升降机监控", unit: "台", value: "" }
                ]
            },
            {
                name: "可选功能",
                type: "multiCheck",
                value: [],
                items: [
                    { name: "倾角传感器" },
                    { name: "风速传感器" },
                    { name: "防碰撞模块" },
                    { name: "人脸识别机" },
                    { name: "重量传感器及安装支架" },
                    { name: "高度速度传感器" },
                    { name: "轿厢抓拍" },
                    { name: "其他" }
                ]
            },
            { name: "备注", type: "inputText", value: "" }
        ]
    },
    {
        name: "多媒体音视频输出体系",
        picture: "",
        type: "system",
        id: "",
        content: [
            { name: "房间数量", type: "input", unit: "间", value: "" },
            {
                name: "房间尺寸",
                type: "multiInput",
                items: [
                    { name: "长", unit: "米", value: "" },
                    { name: "宽", unit: "米", value: "" },
                    { name: "高", unit: "米", value: "" }
                ]
            },
            {
                name: "功能选择",
                type: "multiCheck",
                value: [],
                items: [
                    { name: "投影" },
                    { name: "扩声" },
                    { name: "远程视频" },
                    { name: "LED屏显示" },
                    { name: "其他" }
                ]
            },
            { name: "备注", type: "inputText", value: "" }
        ]
    }
];
