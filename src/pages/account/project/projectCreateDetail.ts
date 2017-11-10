import { Component, Provide, Vue } from "vue-property-decorator";
import { getOptions } from "common/utils/extends";

@Component
export default class ProjectCreateDetail extends Vue {
    @Provide() index = 0;
    @Provide()
    data = {
        area: "", // 区域
        door: "", // 大门数量
        gate: "", //闸机
        gateNumber: "", //闸机数量
        passage: "", // 通行方式
        passageNumber: "", // 数量
        extension: "", // 扩展功能
        center: "", // 发卡中心
        remark: "" // 备注
    };
    @Provide()
    options = {
        area: getOptions(["施工区", "生活区", "其他"]),
        gate: getOptions(["三辊闸", "翼闸", "摆动闸"]),
        passage: getOptions(["IC卡", "人脸识别"]),
        extension: getOptions(["通道", "led实时", "led大屏"]),
        center: getOptions(["岗亭", "办公室", "其他"])
    };
    @Provide()
    $refs: {
        form: HTMLFormElement;
    };

    submit() {}

    cancel() {
        this.$refs.form.resetFields();
    }
}
