import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import { AuthorizeCode, Project, ProjectGroup } from "apis";
import { Query, ResourceMixin } from "src/common/mixins";
@Component
export default class AuthorizeCodeView extends ResourceMixin {
    @Provide() statusList = ["全部", "启用", "停用"];
    @Provide() AuthorizeCode = AuthorizeCode;
    @Provide() Project = Project;
    @Provide() ProjectGroup = ProjectGroup;
    @Provide() projects = [];
    @Provide() projectGroup = "";

    @Watch("projectGroup")
    onGroupChange() {
        Project.list({ group: this.projectGroup });
    }

    protected created() {
        this.resource = AuthorizeCode;
        this.resourceList();
        ProjectGroup.list();
        Project.list();
    }

    authoriazeCodeList() {
        AuthorizeCode.list();
    }
    authorizeCodeDestroy(data: Payload) {
        AuthorizeCode.destroy(data);
        this.authoriazeCodeList();
    }
    authorizeCodeUpdate(data: Payload) {
        AuthorizeCode.update(data);
    }
}
