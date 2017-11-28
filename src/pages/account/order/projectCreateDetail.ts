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
        const paramsId = Number(this.$route.params.id)
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
                item = x
            }
        })
        this.$store.dispatch('addCart', item).then(() => {
            this.$message({
                message: '添加成功',
                type: 'success'
            });
            this.$router.push({ name: "projectCreate" });
        })
    }

    cancel() {
        this.$refs.form.resetFields();
    }
}


const dataSet = [
    {
        name: "可视化劳务管理",
        区域选择: Option(["施工区", "生活区", "其他"], ""), // 区域选择
        闸机: Option(["三辊闸", "翼闸", "摆动闸"], ""), //闸机
        通行方式: Option(["IC卡", "人脸识别"], ""), // 通行方式
        扩展功能: Option(["通道抓拍", "LED实时显示", "LED大屏显示"], null, []), // 扩展功能
        发卡中心: Option(["岗亭", "办公室", "其他"], null, []), // 发卡中心
        入场劳务人员数量: "", //入场劳务人员数量,
        remark: "" // 备注
    },
    {
        name: "智能化视频监控",
        区域选择: Option(["施工区", "生活区", "其他"], ""), // 区域选择
        监控位置: Option(["塔吊监控", "人员通道", "车辆出入口", "围墙监控", "材料堆场", "就餐区监控", "地磅监控", "电梯口", "高空抛物"], ""), //监控位置
        现场施工图纸: Option(["有", "无", "其他"], ""), // 现场施工图纸
        remark: "" // 备注
    },
    {
        name: "专业工地车辆出入管理",
        大门数量: "", //大门数量
        尺寸: Option(["长", "宽", "高"], ""), //尺寸
        模式选择: Option(["双枪击模式", "四枪机模式"], null, []), // 模式选择
        功能选择: Option(["车牌抓拍", "车身抓拍"], null, []), // 功能选择
        remark: "" // 备注
    },
    {
        name: "综合数据采集远程传输",
        区域选择: Option(["施工区", "生活区", "其他"], null, []), // 区域选择
        功能选择: Option(
            ["噪声采集", "粉尘采集", "风速采集", "风向采集", "温度采集", "湿度采集", "PM值采集", "PM2.5采集"],
            null,
            []
        ), // 功能选择
        显示方式: Option(["LED屏显示", "后台LCD显示"], null, []), // 显示方式
        remark: "" // 备注
    },
    {
        name: "塔机安全防碰撞系统",
        类型: Option(["塔吊防碰撞", "升降机监控"], ""),
        可选功能: Option(
            ["倾角传感器", "风速传感器", "防碰撞模块", "人脸识别机", "重量传感器及安装支架", "高度速度传感器", "轿厢抓拍", "其他"],
            null,
            []
        ),
        remark: "" // 备注
    },
    {
        name: "多媒体音视频输出体系",
        房间数量: "",
        房间尺寸: Option(["长", "宽", "高"], ""), //尺寸
        功能选择: Option(["投影", "扩声", "远程视频", "LED屏显示", "其他"], null, []), // 功能选择
        remark: "" // 备注
    }
];
