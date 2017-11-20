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
        title: "首页管理",
        sub: [
            {
                name: "admin.system", //路由信息
                title: "方案管理" //标题
            },
            {
                name: "admin.recruit",
                title: "招聘信息"
            },
            {
                name: "admin.video",
                title: "视频管理"
            },
            {
                name: "admin.documents",
                title: "下载文件管理"
            }
        ]
    },
    {
        title: "基本信息",
        sub: [
            {
                name: "admin.honor",
                title: "公司荣耀"
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
