import { Component, Provide, Vue, Prop } from "vue-property-decorator";
import { Project, AuthorizeCode, ProjectLog } from "apis";
import { data } from "./data";

@Component
export default class ProjectTable extends Vue {
    @Provide() Project = Project;
    @Provide() uploadUrl = "";
    @Provide() ProjectLog = ProjectLog;
    @Provide() AuthorizeCode = AuthorizeCode;
    @Provide() audit = data.audit;
    @Provide() assist = data.assist;
    @Provide() jobJournal = data.jobJournal;
    @Provide() design = data.design;
    @Provide() delivery = data.delivery;

    // auth 项目授权
    // sign 项目签证
    // afterSale 售后申请
    // audit 项目审核
    // assist 项目协助
    // jobJournal 工作日志
    // design 上传设计
    // delivery 仓库发货
    // 该属性用于控制dialog是否显示
    @Provide()
    dialog: { [x: string]: Boolean } = {
        auth: false,
        sign: false,
        afterSale: false,
        audit: false,
        assist: false,
        jobJournal: false,
        design: false,
        delivery: false
    };

    @Provide()
    $refs: {
        AuthForm: HTMLFormElement;
        SignForm: HTMLFormElement;
        AuditForm: HTMLFormElement;
        AssistForm: HTMLFormElement;
        JobJournalForm: HTMLFormElement;
        DesignForm: HTMLFormElement;
        DeliveryForm: HTMLFormElement;
    };
    public get env() {
        return this.$store.state.home.env;
    }

    // search: 是否显示搜索控件， pagination: 是否显示分页控件
    @Prop({ default: { search: false, pagination: false } })
    show: { search: Boolean; pagination: Boolean };

    created() {
        Project.list();
    }
    rowClick(row: any, event: any, column: any) {
        if (column.label !== "操作") {
            this.$router.push({ name: "projectDetail", params: { id: row.id } });
        }
    }
    clickTab(tab: any, event: any) {
        Project.list();
    }
    handleAuth() {
        this.$refs.AuthForm.validate((v: Boolean) => {
            if (v) {
                AuthorizeCode.create({
                    name: AuthorizeCode.m.name,
                    projectId: Project.m.id
                }).then(r => {
                    this.dialog.auth = false;
                    this.$message({
                        message: "授权成功",
                        type: "success"
                    });
                });
            }
        });
    }
    handleSign() {
        this.$refs.SignForm.validate((v: Boolean) => {
            if (v) {
                ProjectLog.create({
                    attatchment: ProjectLog.m.attatchment,
                    action: this.env.projectLog["签字"],
                    projectId: Project.m.id
                }).then(r => {
                    this.dialog.sign = false;
                    this.$message({
                        message: "签字成功",
                        type: "success"
                    });
                });
            }
        });
    }
    handleAudit() {
        this.$refs.AuditForm.validate((v: Boolean) => {
            if (v) {
                ProjectLog.create({
                    content: this.audit.data.content,
                    action: this.env.projectLog["审核"],
                    projectId: Project.m.id
                }).then(r => {
                    this.dialog.audit = false;
                    this.$message({
                        message: "审核成功",
                        type: "success"
                    });
                });
            }
        });
    }
    handleAssist() {
        this.$refs.AssistForm.validate((v: Boolean) => {
            if (v) {
                ProjectLog.create({
                    content: this.audit.data.content,
                    action: this.env.projectLog["审核"],
                    projectId: Project.m.id
                }).then(r => {
                    this.dialog.assist = false;
                    this.$message({
                        message: "申请成功",
                        type: "success"
                    });
                });
            }
        });
    }
    handleJobJournal() {
        this.$refs.JobJournalForm.validate((v: Boolean) => {
            if (v) {
                ProjectLog.create({
                    date: this.jobJournal.data.date,
                    content: this.jobJournal.data.content,
                    attatchment: this.jobJournal.data.attatchment,
                    action: this.env.projectLog["工作日志"],
                    projectId: Project.m.id
                }).then(r => {
                    this.dialog.jobJournal = false;
                    this.$message({
                        message: "提交成功",
                        type: "success"
                    });
                });
            }
        });
    }
    handleDesign() {
        this.$refs.DesignForm.validate((v: Boolean) => {
            if (v) {
                ProjectLog.create({
                    content: this.design.data.content,
                    attatchment: ProjectLog.m.attatchment,
                    action: this.env.projectLog["设计报价"],
                    projectId: Project.m.id
                }).then(r => {
                    this.dialog.design = false;
                    this.$message({
                        message: "上传成功",
                        type: "success"
                    });
                });
            }
        });
    }
    handleDelivery() {
        this.$refs.DeliveryForm.validate((v: Boolean) => {
            if (v) {
                ProjectLog.create({
                    number: this.delivery.data.number,
                    attatchment: ProjectLog.m.attatchment,
                    action: this.env.projectLog["发送成功"],
                    projectId: Project.m.id
                }).then(r => {
                    this.dialog.delivery = false;
                    this.$message({
                        message: "签字成功",
                        type: "success"
                    });
                });
            }
        });
    }
    handleAfterSave() {}
    handleDialog(row: any, dialog: string): void {
        this.dialog[dialog] = true;
        Project.m = row;
    }
    handleChange(file: any, fileList: any): void {
        ProjectLog.m.attatchment = fileList;
    }
}
