import { Component, Provide, Vue, Prop } from "vue-property-decorator";
import { Project, AuthorizeCode, ProjectLog } from "apis";
import { makeContent as _makeContent } from "utils/extends";
import { permissionMap, options, errors, rules } from "./data";
import API from "apis/api-urls"; // 接口URL
import { debug } from "util";

@Component
export default class ProjectTable extends Vue {
    @Provide() Project = Project;
    @Provide() ProjectLog = ProjectLog;
    @Provide() AuthorizeCode = AuthorizeCode;
    @Provide() permissions: Array<string> = [];
    @Provide() formConfig: FormConfig = {} as FormConfig;
    @Provide() formData = { date: new Date(), number: 0, dateType: "" };
    @Provide() options = options;
    @Provide() errors = errors;
    @Provide() rules = rules;

    @Provide() dialog = { name: "", show: false };

    @Provide()
    $refs: {
        form: HTMLFormElement;
    };
    public uploadUrl(type: string) {
        return API.docs + "?type=" + type;
    }
    public get env() {
        return this.$store.state.home.env;
    }
    public get user() {
        return this.$store.state.user.user;
    }

    // search: 是否显示搜索控件， pagination: 是否显示分页控件
    @Prop({ default: { search: false, pagination: false } })
    show: { search: Boolean; pagination: Boolean };

    created() {
        Project.list();
        this.permissions = permissionMap[this.user.group.name] || [];
    }
    inPermission(key: string, item: string): Boolean {
        return key === item;
    }

    rowClick(row: any, event: any, column: any) {
        if (column.label !== "操作") {
            this.$router.push({ name: "projectDetail", params: { id: row.id } });
        }
    }
    makeContent(row: any, column: any, cellValue: any): string {
        let result = cellValue
            .map((item: any) => {
                return _makeContent(item);
            })
            .join("\n");
        return result;
    }
    makeStatus(row: any, column: any, cellValue: any): string {
        return this.env.projectStatusReverse[cellValue];
    }
    handleAuth() {
        AuthorizeCode.create({
            name: AuthorizeCode.m.name,
            projectId: Project.m.id
        }).then(r => {
            this.$message({
                message: "授权成功",
                type: "success"
            });
        });
        this.dialog = { name: "", show: false };
    }
    handleAfterMarket(row: any) {
        this.Project.m.populate(row);
        this.$router.push({ name: "afterMarket" });
    }
    handleDialog(row: any, name: string): void {
        this.dialog = { name: name, show: true };
        this.formConfig = FormConfig[name];
        Project.m.populate(row);
    }
    handleSubmit() {
        this.$refs.form.validate((v: Boolean) => {
            if (!v) {
                return;
            }
            if (this.dialog.name === "授权") {
                return this.handleAuth();
            }
            ProjectLog.create({
                attatchment: ProjectLog.m.attatchment,
                action: this.dialog,
                projectId: Project.m.id
            })
                .then(r => {
                    this.dialog = { name: "", show: false };
                    this.$message({
                        message: "提交成功",
                        type: "success"
                    });
                })
                .catch(() => {
                    this.$message({
                        message: "提交失败",
                        type: "error"
                    });
                });
        });
    }
    handleRejected() {}
    handleClose() {
        this.dialog = { name: "", show: false };
        this.$refs.form.resetFields();
        Project.m.populate({ attatchment: [] });
    }
    handleChange(file: any, fileList: any): void {
        Project.m.attatchment = fileList.map((item: any) => {
            return item.response;
        });
    }
    post() {}
}

interface FormConfig {
    title: string;
    value: Array<{ key: string; title: string }>;
}
const FormConfig: { [key: string]: FormConfig } = {
    授权: {
        title: "项目授权",
        value: [
            { key: "name", title: "项目名称" },
            { key: "auth", title: "授权码名称" },
            { key: "close", title: "取消" },
            { key: "submit", title: "确认" }
        ]
    },
    签字: {
        title: "项目签字",
        value: [
            { key: "name", title: "项目名称" },
            { key: "attatchment", title: "附件" },
            { key: "close", title: "取消" },
            { key: "submit", title: "确认" }
        ]
    },
    审核: {
        title: "项目审核",
        value: [
            { key: "name", title: "项目名称" },
            { key: "content", title: "审核意见" },
            { key: "attatchment", title: "附件" },
            { key: "close", title: "取消" },
            { key: "rejected", title: "驳回" },
            { key: "submit", title: "确认" }
        ]
    },
    协助申请: {
        title: "协助申请",
        value: [
            { key: "name", title: "项目名称" },
            { key: "content", title: "工作内容" },
            { key: "attatchment", title: "附件" },
            { key: "close", title: "取消" },
            { key: "submit", title: "确认" }
        ]
    },
    工作日志: {
        title: "工作日志",
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
    设计报价: {
        title: "上传设计及报价",
        value: [
            { key: "name", title: "项目名称" },
            { key: "content", title: "报价" },
            { key: "attatchment", title: "设计文件" },
            { key: "close", title: "取消" },
            { key: "submit", title: "确认" }
        ]
    },
    发货: {
        title: "项目发货记录",
        value: [
            { key: "name", title: "项目名称" },
            { key: "lackingList", title: "缺货清单" },
            { key: "attatchment", title: "缺货清单文件" },
            { key: "close", title: "取消" },
            { key: "submit", title: "确认" }
        ]
    }
};
