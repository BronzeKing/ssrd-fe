import { Component, Provide, Vue } from "vue-property-decorator";
import { Option } from "common/utils/extends";
import { Project } from "apis";
// 结算购物车

@Component
export default class ProjectCreateDetail extends Vue {
    public get index() {
        return this.$route.params.id;
    }

    @Provide() Project = Project;

    @Provide()
    $refs: {
        form: HTMLFormElement;
    };

    protected create() {
        Project.retrieve({id: this.$route.params.id});
    }

    submit() {

    }

    cancel() {
        this.$refs.form.resetFields();
    }
}
