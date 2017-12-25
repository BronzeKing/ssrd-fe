import { Component, Prop, Provide, Vue, Watch } from "vue-property-decorator";
import { Resource } from "src/apis/resource";
import { Model } from "src/apis/baseModel";
import API from "apis/api-urls"; // 接口URL
import { Loading } from "element-ui";
import { Query } from "./";
/*
*/
// 处理table的mixin
@Component
export class ResourceListMixin extends Vue {
    @Provide() query: Query = {} as Query;
    @Provide() loading = true;
    public resource: Resource<Model>;

    public get env() {
        return this.$store.state.home.env;
    }
    public get user() {
        return this.$store.state.user.user;
    }
    resourceList() {
        this.loading = true;
        this.resource.list(this.query).then((r: any) => {
            this.loading = false;
            return r;
        });
    }
    handleCurrentChange(data: any) {
        this.resource.m.reset();
        this.resource.m.populate(data);
    }
}

// 处理新建、编辑的dialog的mixin
@Component
export class ResourceMixin extends ResourceListMixin {
    @Provide() fileList: Array<any> = [];
    @Provide() uploadUrl = API.docs;
    @Provide() dialog = false;
    @Provide() action = "";
    @Provide()
    $refs: {
        form: HTMLFormElement;
    };

    handleCreate() {
        this.dialog = true;
        this.action = "create";
        this.resource.m.reset();
    }
    handleUpdate() {
        this.dialog = true;
        this.action = "update";
    }
    handleDestroy(data: any) {
        this.resource.destroy(data).then((r: any) => {
            this.resource.list();
            this.$message({
                message: "删除成功",
                type: "success"
            });
        });
    }
    handleSubmit() {
        this.$refs.form.validate((valid: Boolean) => {
            if (!valid) {
                return;
            }
            let data = this.getBody();
            if (this.action === "create") {
                this.resource
                    .create(data)
                    .then((r: any) => {
                        this.dialog = false;
                        this.resourceList();
                        this.$message({
                            message: "提交成功",
                            type: "success"
                        });
                    })
                    .catch(() => {
                        this.$message({
                            message: "提交成功",
                            type: "error"
                        });
                    });
            } else {
                this.resource
                    .update(data)
                    .then((r: any) => {
                        this.dialog = false;
                        this.resourceList();
                        this.$message({
                            message: "提交成功",
                            type: "success"
                        });
                    })
                    .catch(() => {
                        this.$message({
                            message: "提交成功",
                            type: "error"
                        });
                    });
            }
            this.fileList = [];
        });
    }
    getBody() {
        // 返回handleSubmit中的data,用于发送post请求, 可在子类中重写
        return this.resource.m.serialize();
    }
    handleChange(file: any, fileList: any): void {
        this.fileList = fileList;
    }
    handleClose() {
        this.dialog = false;
        this.$refs.form.resetFields();
        this.fileList = [];
    }
}
