import { Component, Provide, Vue } from "vue-property-decorator";
import { Option } from "common/utils/extends";
import { System, ProjectCreate as Project, Profile } from "apis";

@Component
export default class ProjectCreateDetail extends Vue {
    @Provide() index = 0; // 决定显示哪个system的form
    @Provide() System = System;
    @Provide() Project = Project;
    @Provide() Profile = Profile;

    @Provide()
    $refs: {
        form: HTMLFormElement;
        settleForm: HTMLFormElement;
    };

    protected created() {
        System.list().then((r: any) => {
            System.t.Records.map(item => {
                if (item.id === Number(this.$route.params.id)) {
                    System.m.populate(item);
                }
            });
        });
        this.index = Number(this.$route.params.id);
    }

    @Provide()
    labor = {
        labor: "可视化劳务管理",
        区域选择: Option(["施工区", "生活区", "其他"], ""), // 区域选择
        闸机: Option(["三辊闸", "翼闸", "摆动闸"], ""), //闸机
        通行方式: Option(["IC卡", "人脸识别"], ""), // 通行方式
        扩展功能: Option(["通道抓拍", "LED实时显示", "LED大屏显示"], null, []), // 扩展功能
        发卡中心: Option(["岗亭", "办公室", "其他"], null, []), // 发卡中心
        入场劳务人员数量: "", //入场劳务人员数量,
        备注: "" // 备注
    };
    @Provide()
    monitor = {
        name: "智能化视频监控的配置",
        区域选择: Option(["施工区", "生活区", "其他"], ""), // 区域选择
        监控位置: Option(["塔吊监控", "人员通道", "车辆出入口", "围墙监控", "材料堆场", "就餐区监控", "地磅监控", "电梯口", "高空抛物"], ""), //监控位置
        现场施工图纸: Option(["有", "无", "其他"], ""), // 现场施工图纸
        备注: "" // 备注
    };
    @Provide()
    car = {
        name: "专业车辆出入管理",
        大门数量: "", //大门数量
        尺寸: Option(["长", "宽", "高"], ""), //尺寸
        模式选择: Option(["双枪击模式", "四枪机模式"], null, []), // 模式选择
        功能选择: Option(["车牌抓拍", "车身抓拍"], null, []), // 功能选择
        备注: "" // 备注
    };
    @Provide()
    collect = {
        name: "综合数据采集远程传输",
        区域选择: Option(["施工区", "生活区", "其他"], null, []), // 区域选择
        功能选择: Option(
            ["噪声采集", "粉尘采集", "风速采集", "风向采集", "温度采集", "湿度采集", "PM值采集", "PM2.5采集"],
            null,
            []
        ), // 功能选择
        显示方式: Option(["LED屏显示", "后台LCD显示"], null, []), // 显示方式
        备注: "" // 备注
    };
    @Provide()
    safe = {
        name: "塔机安全防碰撞系统",
        类型: Option(["塔吊防碰撞", "升降机监控"], ""),
        可选功能: Option(
            ["倾角传感器", "风速传感器", "防碰撞模块", "人脸识别机", "重量传感器及安装支架", "高度速度传感器", "轿厢抓拍", "其他"],
            null,
            []
        ),
        备注: "" // 备注
    };

    @Provide()
    media = {
        name: "多媒体音视频输出体系",
        房间数量: "",
        房间尺寸: Option(["长", "宽", "高"], ""), //尺寸
        功能选择: Option(["投影", "扩声", "远程视频", "LED屏显示", "其他"], null, []), // 功能选择
        备注: "" // 备注
    };

    submit() {
        this.$router.push({ name: "cartCheckout" });
    }
    addToCart() {
        this.$router.push({ name: "projectCreate" });
    }

    cancel() {
        this.$refs.form.resetFields();
    }
}
