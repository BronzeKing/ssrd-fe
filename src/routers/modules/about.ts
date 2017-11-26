/**
 * 关于我们相关路由
 */

// 关于我们
import { Route } from "vue-router";
const about = (r: any) => require.ensure([], () => r(require("pages/views/about/about")), "about");
// 公司简介
const companyProfile = (r: any) =>
    require.ensure([], () => r(require("pages/views/about/components/company-profile")), "about");
// 企业文化
const corporateCulture = (r: any) =>
    require.ensure([], () => r(require("pages/views/about/components/corporate-culture")), "about");
// 荣耀资质
const honor = (r: any) =>
    require.ensure([], () => r(require("pages/views/about/components/honor")), "about");
// 合作伙伴
const cooperativePartner = (r: any) =>
    require.ensure(
        [],
        () => r(require("pages/views/about/components/cooperative-partner")),
        "about"
    );
// 招贤纳士
const recruit = (r: any) =>
    require.ensure([], () => r(require("pages/views/about/components/recruit")), "about");
// 联系我们
const contactUs = (r: any) =>
    require.ensure([], () => r(require("pages/views/about/components/contact-us")), "about");
export default [
    {
        path: "/about",
        name: "about",
        component: about,
        redirect: { name: "companyProfile" },
        children: [
            {
                path: "",
                redirect: "companyProfile"
                // meta: {
                //     headerMenuIndex: 6
                // }
            },
            {
                path: "companyProfile",
                name: "companyProfile",
                component: companyProfile,
                meta: {
                    title: "公司简介",
                    activeTab: 1
                }
            },
            {
                path: "corporateCulture",
                name: "corporateCulture",
                component: corporateCulture,
                meta: {
                    title: "公司文化",
                    activeTab: 2
                }
            },
            {
                path: "honor",
                name: "honor",
                component: honor,
                meta: {
                    title: "荣誉资质",
                    activeTab: 3
                }
            },
            {
                path: "cooperativePartner",
                name: "cooperativePartner",
                component: cooperativePartner,
                meta: {
                    title: "合作伙伴",
                    activeTab: 4
                }
            },
            {
                path: "recruit",
                name: "recruit",
                component: recruit,
                meta: {
                    title: "招贤纳士",
                    activeTab: 5
                }
            },
            {
                path: "contactUs",
                name: "contactUs",
                component: contactUs,
                meta: {
                    title: "联系我们",
                    activeTab: 6
                }
            }
        ]
    }
];
