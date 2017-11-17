// 项目详情页面
import { Component, Provide, Vue } from "vue-property-decorator";
import { Project, ProjectLog } from "apis";
@Component
export default class ProjectDetail extends Vue {
    @Provide() activeName = "1";
    @Provide() Project = Project;
    @Provide() ProjectLog = ProjectLog;
    protected created() {
        Project.retrieve({ id: this.$route.params.id });
        ProjectLog.list({ projectId: this.$route.params.id });
    }
}
