/**
 * 关于我们相关路由
 */

// 关于我们
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
const guide = (r: any) =>
    require.ensure([], () => r(require("pages/views/about/components/guide")), "about");
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
            },
            {
                path: "companyProfile",
                name: "companyProfile",
                component: companyProfile,
                meta: {
                    title: "公司简介"
                }
            },
            {
                path: "corporateCulture",
                name: "corporateCulture",
                component: corporateCulture,
                meta: {
                    title: "公司文化"
                }
            },
            {
                path: "honor",
                name: "honor",
                component: honor,
                meta: {
                    title: "荣誉资质"
                }
            },
            {
                path: "cooperativePartner",
                name: "cooperativePartner",
                component: cooperativePartner,
                meta: {
                    title: "合作伙伴"
                }
            },
            {
                path: "recruit",
                name: "recruit",
                component: recruit,
                meta: {
                    title: "招贤纳士"
                }
            },
            {
                path: "contactUs",
                name: "contactUs",
                component: contactUs,
                meta: {
                    title: "联系我们"
                }
            },
            {
                path: "guide",
                name: "guide",
                component: guide,
                meta: {
                    title: "合作指南"
                }
            }
        ]
    }
];
