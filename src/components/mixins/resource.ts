import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import { Resource } from "src/apis/resource";
import { Model } from "src/apis/baseModel";
import API from "apis/api-urls"; // 接口URL

interface Query {
    // 存放resourceList 中的参数
    source: number; // documents中的来源
}

@Component
export default class ResourceMixin extends Vue {
    @Provide() query: Query = {} as Query;

    public resource: Resource<Model>;
    @Provide() fileList: Array<any> = [];
    @Provide() uploadUrl = API.docs;
    @Provide() dialog = false;
    @Provide() action = "";
    $refs: {
        from: HTMLFormElement;
    };
    public get env() {
        return this.$store.state.home.env;
    }
    resourceList() {
        this.resource.list(this.query);
    }

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
        });
    }
    handleSubmit() {
        this.$refs.from.validate((valid: Boolean) => {
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
    handleCurrentChange(data: any) {
        this.resource.m.reset();
        this.resource.m.populate(data);
    }
}
