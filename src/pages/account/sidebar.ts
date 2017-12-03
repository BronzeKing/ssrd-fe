// 侧边栏
import { Component, Provide, Vue, Watch } from "vue-property-decorator";

@Component
export default class Slider extends Vue {
    @Provide() sidebar = SIDEBAR;
    @Provide() isCollapse = false;
    @Provide() activeMenu = "0-1";

    protected created() {
        this.activeMenu = IndexMap[this.$route.name || "order"];
        // console.log(this.$route.name, this.activeMenu);
    }

    @Watch("$route")
    onRouteChange() {
        this.activeMenu = IndexMap[this.$route.name || "order"];
        // console.log(this.activeMenu);
    }
    handleOpen(key: string, keyPath: string) {}
    handleClose(key: string, keyPath: string) {}
}
// 侧边栏的配置信息，包括标题
const SIDEBAR = [
    {
        title: "订单中心",
        sub: [
            {
                name: "projectCreate", //路由信息
                title: "新建项目" //标题
            },
            {
                name: "afterMarket",
                title: "售后申请"
            },
            {
                name: "quick",
                title: "快捷下单"
            },
            {
                name: "mineOrder",
                title: "我的订单"
            },
            {
                name: "cart",
                title: "我的购物车"
            },
            {
                name: "collect",
                title: "我的收藏"
            },
            {
                name: "history",
                title: "我的浏览记录"
            }
        ]
    },
    {
        title: "项目中心",
        sub: [
            {
                name: "project.documents",
                title: "项目资料"
            },
            {
                name: "projectList",
                title: "项目动态"
            }
        ]
    },
    {
        title: "服务中心",
        sub: [
            {
                name: "servicePromise",
                title: "服务承诺"
            },
            {
                name: "feedback",
                title: "意见反馈"
            },
            {
                name: "survey",
                title: "满意度调查"
            }
        ]
    },
    {
        title: "管理中心",
        sub: [
            {
                name: "secure",
                title: "安全设置"
            },
            {
                name: "user",
                title: "子账号管理"
            },
            {
                name: "authorizeCode",
                title: "授权码管理"
            },
            {
                name: "message",
                title: "我的消息"
            },
            {
                name: "profile",
                title: "个人资料"
            },
            {
                name: "companyProfile",
                title: "企业信息"
            },
            {
                name: "terminal",
                title: "远程终端访问平台"
            }
        ]
    },
    {
        title: "合作伙伴",
        sub: [
            {
                name: "cooperationGuide",
                title: "合作指南"
            }
        ]
    }
];
/**
 * 给name和index做个映射关系，存储的是{user: 1} 这样的，用于sidebar默认打开某个menu
 */
const IndexMap: { [key: string]: string } = {};
SIDEBAR.map((item, index) => {
    item.sub.map((x, i) => {
        IndexMap[x.name] = String(index) + "-" + String(i);
    });
});
