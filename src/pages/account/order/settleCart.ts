import { Component, Provide, Vue } from "vue-property-decorator";
import { Option } from "common/utils/extends";
import { Project, Profile } from "apis";
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
        let {name, user, ...profile} = Profile.m.serialize()
        Project.m.populate({linkman: name, mobile: user.mobile, ...profile})
    }

    submit() {
        debugger
        this.$refs.form.validate((valid: Boolean) => {
            if (valid) {
                Project.create()
            } else {
                return false
            }
        })
    }

    cancel() {
        this.$refs.form.resetFields();
    }
}
