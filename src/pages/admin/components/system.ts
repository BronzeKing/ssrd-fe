import { Component, Provide, Vue } from "vue-property-decorator";
import { System } from "apis";
/**
 * 后台管理系统管理页面
 * 
 * @export
 * @class SystemView
 * @extends {Vue}
 */
@Component
export default class SystemView extends Vue {
    @Provide() dialog = { system: false };
    @Provide() loading = false;
    @Provide() System = System;
    @Provide() action = '';
    $refs: {
        SystemForm: HTMLFormElement
    }

    protected created(): void {
        System.list();
    }
    handleCurrentChange(data: any) {
        this.System.m.populate(data);
    }
    handleCreate() {
        this.dialog.system = true;
        this.action = 'create';
        System.m.reset();
    }
    handleUpdate() {
        this.dialog.system = true;
        this.action = 'update';
    }
    handleDestroy(data: any) {
        System.destroy(data).then((r: any) => {
        System.list();
        });
    }
    /**
     * 处理新建或者编辑系统
     * 
     * @param {any} action create: 新建招聘信息
     */
    handleSystem() {
        if (this.action === 'create') {
            System.create().then((r: any) => {
                this.dialog.system = false;
                System.list();
            })
        } else {
            System.update().then((r:any) => {
                this.dialog.system = false;
                System.list()
            })
        }
    }
}