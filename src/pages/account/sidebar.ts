// 侧边栏
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
interface Item {
    title: string;
    name: string;
    group?: Array<string>;
}
interface Side extends Item {
    sub: Array<Item>;
}
interface Index {
    [key: string]: string;
}
const filter = (group: string, item: Item) => {
    if (item.group && item.group.indexOf(group) < 0) {
        return false;
    }
    return true;
};
@Component
export default class Slider extends Vue {
    @Provide() sidebar: Array<Side> = [];
    @Provide() isCollapse = false;
    @Provide() activeMenu = "0-1";
    @Provide() IndexMap: Index = {};
    @Provide()
    icons = {
        manager: "el-icon-setting",
        project: "el-icon-view",
        order: "el-icon-menu",
        service: "el-icon-service"
    };

    protected created() {
        let group = this.$store.getters.user.group.name;
        let _filter = filter.bind(null, group);
        this.sidebar = SIDEBAR.filter((item: Side) => {
            if (!_filter(item)) {
                return false;
            }
            item.sub = item.sub.filter(_filter);
            return true;
        });
        this.IndexMap = getIndexMap(this.sidebar);
        this.activeMenu = this.IndexMap[this.$route.name || "order"];
        // console.log(this.$route.name, this.activeMenu);
    }

    @Watch("$route")
    onRouteChange() {
        this.activeMenu = this.IndexMap[this.$route.name || "order"];
    }
    handleOpen(key: string, keyPath: string) {}
    handleClose(key: string, keyPath: string) {}
}
// 侧边栏的配置信息，包括标题
const SIDEBAR: Array<Side> = [
    {
        title: "订单中心",
        name: "order",
        group: ["客户", "个人用户", "常规用户", "行业用户", "分销商", "商务部"],
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
        name: "project",
        sub: [
            {
                name: "projectList",
                title: "项目动态"
            }
        ]
    },
    {
        title: "服务中心",
        name: "service",
        group: ["客户", "个人用户", "常规用户", "行业用户", "分销商", "商务部"],
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
        name: "manager",
        sub: [
            {
                name: "secure",
                title: "安全设置"
            },
            {
                name: "profile",
                title: "个人资料"
            },
            {
                name: "message",
                title: "我的消息"
            },
            {
                name: "companyProfile",
                title: "企业信息",
                group: ["客户", "个人用户", "常规用户", "行业用户", "分销商"]
            },
            {
                name: "user",
                group: ["客户", "个人用户", "常规用户", "行业用户", "分销商", "商务部"],
                title: "子账号管理"
            },
            {
                name: "authorizeCode",
                group: ["客户", "个人用户", "常规用户", "行业用户", "分销商", "商务部"],
                title: "授权码管理"
            },
            {
                name: "terminal",
                title: "远程终端访问平台",
                group: ["客户", "个人用户", "常规用户", "行业用户", "分销商", "商务部"]
            }
        ]
    }
];
/**
 * 给name和index做个映射关系，存储的是{user: 1} 这样的，用于sidebar默认打开某个menu
 */
const getIndexMap = function(sidebar: Array<Side>): Index {
    const IndexMap: Index = {};
    sidebar.map((item, index) => {
        IndexMap[item.name] = String(index) + "-0";
        item.sub.map((x, i) => {
            IndexMap[x.name] = String(index) + "-" + String(i);
        });
    });
    IndexMap["account"] = IndexMap["personal"] = IndexMap["manager"];
    return IndexMap;
};
