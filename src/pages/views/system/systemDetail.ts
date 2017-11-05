import { Component, Provide, Vue } from "vue-property-decorator";
import { Route } from "vue-router";
// 系统展示页面
import { menuBox, infoBanner } from "components";
import { System } from "apis";
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
    },
    activeTab: 0
  };
  @Provide() dotMenu = ["系统介绍", "系统结构", "功能特性", "现场图片", "相关案例"];
  @Provide() activeDotTab = 0;
  beforeRouteEnter(to: Route, from: Route, next: any) {
    next((vm: SystemDetail) => {
      vm.menuData.activeTab = Number(vm.$route.params.id) || 0;
    });
  }
  mounted() {
    System.list().then((r: Payload) => {
      let index = r.Records
        .map((x: Payload) => {
          return x.id;
        })
        .indexOf(this.menuData.activeTab);
      this.System.m = r.Records[index];
      this.menuData.menuList = r.Records;
    });
  }
  linkTo(data: Payload) {
    this.menuData.activeTab = data.id;
    let index = this.System.t.Records
      .map((x: Payload) => {
        return x.id;
      })
      .indexOf(this.menuData.activeTab);
    this.System.m = this.System.t.Records[index];
    this.$router.replace({ name: "systemDetail", params: { id: data.id } });
  }
  handDot(index: number) {
    this.activeDotTab = index;
    let anchor: any = this.$el.querySelector("#text" + index);
    window.scrollTo(0, anchor.offsetTop);
  }
}
