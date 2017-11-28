import { Component, Provide, Vue } from "vue-property-decorator";
import { Option } from "common/utils/extends";
import { Project } from "apis";
// 结算购物车

@Component
export default class ProjectCreateDetail extends Vue {
    @Provide() Project = Project;
    @Provide()
    $refs: {
        form: HTMLFormElement;
    };

    protected create() {
        Project.m.populate(this.$store.state.user.profile)
    }

    submit() {}

    cancel() {
        this.$refs.form.resetFields();
    }
}
