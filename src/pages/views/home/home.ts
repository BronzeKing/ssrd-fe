import { Component, Provide, Vue } from "vue-property-decorator";

import { IndustryLink, News, SystemCase } from "apis";

import { crashBall } from "components";

@Component({
    components: {
        crashBall
    }
})
export default class Home extends Vue {
    @Provide()
    homeBanners: Array<any> = [
        require("assets/home_banner.png"),
        require("assets/home_banner1.png"),
        require("assets/home_banner2.png")
    ];
    @Provide() IndustryLink = IndustryLink;
    @Provide() News = News;
    @Provide() SystemCase = SystemCase;
    @Provide()
    orderProcess = [
        { label: "客户登录", name: "login", active: true },
        { label: "需求下单", name: "projectCreate" },
        { label: "上传图纸", name: "" },
        { label: "在线提交", name: "" },
        { label: "需求沟通", name: "" },
        { label: "方案报价", name: "" }
    ];

    /**
     * 创建钩子
     * @returns void
     */
    protected created(): void {
        // 获取新闻内容咯
        let next = this.$route.query.next
        if (next) {
            this.$router.push(next)
        }
        News.list({ PageSize: 3 });
        IndustryLink.list();
        SystemCase.list({ PageSize: 3 });
    }
}
