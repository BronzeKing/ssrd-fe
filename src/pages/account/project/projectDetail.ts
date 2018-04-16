// 项目详情页面
import { Component, Provide, Vue } from "vue-property-decorator";
import { makeContent as _makeContent } from "common/utils/extends";
import { Project, ProjectLog, Job } from "apis";

@Component
export default class ProjectDetail extends Vue {
    @Provide() activeName = "1";
    @Provide() Project = Project;
    @Provide() ProjectLog = ProjectLog;
    @Provide() jobLog: Array<any> = [];
    protected created() {
        Project.retrieve({ id: this.$route.params.id });
        ProjectLog.list({ projectId: this.$route.params.id });
        ProjectLog.list({ projectId: this.$route.params.id }).then((r: any) => {
            this.jobLog = r.Records;
        });
    }
    makeContent(): string {
        let content = Project.m.content || [];
        return content
            .map((item: any) => {
                return _makeContent(item);
            })
            .join("\n");
    }
    makeAction(row: any, column: any, action: number) {
        let env = this.$store.state.home.env;
        return env.projectLogReverse[action];
    }
}
