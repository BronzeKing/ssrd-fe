
import { Component, Provide, Vue } from "vue-property-decorator";
import { Recruitment } from "apis";
/**
 * 后台管理招聘信息页面
 * 
 * @export
 * @class Recruit
 * @extends {Vue}
 */
@Component
export default class Recruit extends Vue {
    @Provide() dialog = { recruit: false };
    @Provide() loading: Boolean = false;
    @Provide() action: string = '';
    @Provide() Recruitment: any = Recruitment;
    $refs: {
        RecruitForm: HTMLFormElement
    }

    protected created(): void {
        Recruitment.list();
    }
    handleCurrentChange(data: any) {
        this.Recruitment.m.populate(data);
    }
    handleCreate() {
        this.dialog.recruit = true;
        this.action = 'create';
        Recruitment.m.reset();
    }
    handleUpdate() {
        this.dialog.recruit = true;
        this.action = 'update';
    }
    handleDestroy(data: any) {
        Recruitment.destroy(data).then((r: any) => {
        Recruitment.list();
        });
    }
    /**
     * 处理新建或者编辑招聘信息
     * 
     * @param {any} action create: 新建招聘信息
     * @memberof Recruit
     */
    handleRecruitment() {
        if (this.action === 'create') {
            Recruitment.create().then((r: any) => {
                this.dialog.recruit = false;
                Recruitment.list();
            })
        } else {
            Recruitment.update().then((r:any) => {
                this.dialog.recruit = false;
                Recruitment.list()
            })
        }
    }
}