import { Component, Provide, Vue, Prop } from "vue-property-decorator";
import { Project, AuthorizeCode, ProjectLog } from "apis";
import { makeContent as _makeContent } from "utils/extends";
import {
    TT,
    permissionMap,
    options,
    errors,
    rules,
    Permission,
    FormConfig,
    FormConfigs
} from "./data";
import API from "apis/api-urls"; // 接口URL
import { debug } from "util";

@Component
export default class ProjectTable extends Vue {
    @Provide() Project = Project;
    @Provide() ProjectLog = ProjectLog;
    @Provide() AuthorizeCode = AuthorizeCode;
    @Provide() permissions: Array<Permission> = [];
    @Provide()
    formConfig: FormConfig = {
        value: [],
        title: "",
        active: (status: number) => {
            return true;
        }
    };
    @Provide() formData = { date: new Date(), number: 0, dateType: "" };
    @Provide() options = options;
    @Provide() errors = errors;
    @Provide() rules = rules;
    @Provide() TT = TT;

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
    showing(key: string, item: string): Boolean {
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
        this.formConfig = FormConfigs[name];
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
                action: this.dialog.name,
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
    handleRejected() {
        this.dialog.name = "驳回";
        this.handleSubmit();
    }
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
}
