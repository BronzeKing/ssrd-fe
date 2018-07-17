import { Component, Provide, Vue, Prop, Watch } from "vue-property-decorator";
import { Media, Project, AuthorizeCode, ProjectLog } from "apis";
import { makeContent as _makeContent } from "utils/extends";
import { TT, stepMap, options, errors, rules, Step, FormConfig, FormConfigs } from "./data";
import API from "apis/api-urls"; // 接口URL
import { Query, ResourceListMixin } from "src/common/mixins";
import storage from "common/utils/member";

@Component
export default class ProjectTableView extends ResourceListMixin {
    @Provide() Project = Project;
    @Provide() ProjectLog = ProjectLog;
    @Provide() AuthorizeCode = AuthorizeCode;
    @Provide() steps: Array<Step> = [];
    @Provide() types = ["全部项目", "进度类", "维护类", "签证类"];
    @Provide()
    formConfig: FormConfig = {
        value: [],
        name: "",
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

    @Provide() dialogName = "";

    public getUploadUrl(type: string) {
        return API.docs + "?type=" + type;
    }

    // search: 是否显示搜索控件， pagination: 是否显示分页控件
    @Prop({ default: { search: false, pagination: false, status: false } })
    show: { search: Boolean; pagination: Boolean; status: Boolean };

    created() {
        this.resource = Project;
        this.resourceList();
        this.steps = stepMap[this.user.group.name] || [];
    }
    showing(key: string, item: string): Boolean {
        return key === item;
    }

    rowClick(row: any, event: any, column: any) {
        if (column.label !== "操作") {
            Project.m.populate(row);
            this.$router.push({ name: "projectDetail", params: { id: row.id } });
        }
    }
    _makeContent(item: any) {
        return _makeContent(item);
    }
    getName(content: any) {
        return content
            .map((x: any) => {
                return x.name;
            })
            .join("、");
    }
    makeStatus(row: any, column: any, cellValue: any): string {
        return this.env.projectStatusReverse[cellValue];
    }
    setDialog(dialog: boolean = false, dialogName: string = "") {
        this.dialogName = dialogName;
        this.dialog = dialog;
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
        this.setDialog();
    }
    handleAfterMarket(row: any) {
        this.Project.m.populate(row);
        this.$router.push({ name: "afterMarket" });
    }
    handleDialog(row: any, name: string): void {
        this.setDialog(true, name);
        this.formConfig = FormConfigs[name];
        Project.m.populate(row);
    }
    handleSubmit() {
        this.$refs.form.validate((v: Boolean) => {
            if (!v) {
                return;
            }
            if (this.dialogName === "授权") {
                return this.handleAuth();
            }
            ProjectLog.create({
                attatchment: ProjectLog.m.attatchment,
                action: this.dialogName,
                projectId: Project.m.id
            })
                .then(r => {
                    this.resourceList();
                    this.setDialog();
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
        this.dialogName = "驳回";
        this.handleSubmit();
    }
    handleClose() {
        this.setDialog();
        this.$refs.form.resetFields();
    }
    handleDocument(projectId: string) {
        const token = storage.getCredential();
        const mediaUrl = API.media + `?token=${token}&projectId=${projectId}`;
        // window.location.href = mediaUrl;
        window.open(mediaUrl, "_blank");
    }
}
