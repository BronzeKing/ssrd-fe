import { Component, Provide, Vue } from "vue-property-decorator";
import { Project, Profile } from "src/apis";
import API from "src/apis/api-urls"; // 接口URL
// 结算购物车

@Component
export default class ProjectCreateDetail extends Vue {
    @Provide() Project = Project;
    @Provide() Profile = Profile;
    @Provide()
    $refs: {
        form: HTMLFormElement;
    };

    protected created() {
        let { name, user, ...profile } = Profile.m.serialize();
        Project.m.populate({ linkman: name, mobile: user.mobile, ...profile });
        this.$store.dispatch("cart");
    }
    public getUploadUrl(type: string) {
        return `${API.docs}?type=${type}`;
    }

    submit() {
        let content = this.$store.getters.cart;
        this.$refs.form.validate((valid: Boolean) => {
            if (!valid) {
                return false;
            }
            let {
                name,
                remark,
                linkman,
                budget,
                duration,
                mobile,
                address,
                attatchment,
                ...rest
            } = Project.m;
            let attatchments = attatchment.map((item: any) => {
                return item.id;
            });
            Project.create({
                name,
                remark,
                linkman,
                budget,
                duration,
                mobile,
                address,
                attatchment: attatchments,
                type: "新建项目",
                content: content
            }).then((r: any) => {
                this.$message({
                    message: "提交成功",
                    type: "success"
                });
                this.$router.push({ name: "projectList" });
            });
        });
    }

    cancel() {
        this.$refs.form.resetFields();
    }
}
