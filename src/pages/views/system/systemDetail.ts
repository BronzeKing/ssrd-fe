import { Component, Provide, Watch, Vue } from "vue-property-decorator";
import { Route } from "vue-router";
// 系统展示页面
import { menuBox, infoBanner } from "components";
import { System } from "src/apis";
@Component({
    components: {
        menuBox,
        infoBanner
    }
})
export default class SystemDetail extends Vue {
    @Provide() System = System;
    @Provide()
    menuData = {
        menuList: [],
        title: {
            name: "系统展示",
            englishName: "SYSTEM SHOW"
        }
    };
    @Provide() dotMenu = ["系统介绍", "系统结构", "功能特性", "现场图片", "相关案例"];
    @Provide() activeDotTab = 0;
    protected created() {
        System.list().then((r: Payload) => {
            this.menuData.menuList = r.Records;
        });
        System.retrieve({ id: this.$route.params.id });
    }
    @Watch('$route')
    onRouteChange() {
        System.retrieve({ id: this.$route.params.id });
    }
    handDot(index: number) {
        this.activeDotTab = index;
        let anchor: any = this.$el.querySelector("#text" + index);
        window.scrollTo(0, anchor.offsetTop);
    }
}
