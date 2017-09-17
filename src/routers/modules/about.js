/**
 * 关于我们相关路由
 */

 // 关于我们
const about = r => require.ensure([], () => r(require('pages/views/about/about')), 'about');
// 公司简介
const companyProfile = r => require.ensure([], () => r(require('pages/views/about/components/company-profile')), 'companyProfile');
// 企业文化
const corporateCulture = r => require.ensure([], () => r(require('pages/views/about/components/corporate-culture')), 'corporateCulture');
// 荣耀资质
const honor = r => require.ensure([], () => r(require('pages/views/about/components/honor')), 'honor');
// 合作伙伴
const cooperativePartner = r => require.ensure([], () => r(require('pages/views/about/components/cooperative-partner')), 'cooperativePartner');
// 招贤纳士
const recruit  = r => require.ensure([], () => r(require('pages/views/about/components/recruit')), 'recruit');
// 联系我们
const contactUs  = r => require.ensure([], () => r(require('pages/views/about/components/contact-us')), 'contactUs');
export default [
    {
        path: 'about',
        // name: 'about',
        component: about,
        children: [
            {
                path: '',
                redirect: 'companyProfile'
            },
            {
                path: 'companyProfile',
                name: 'companyProfile',
                component: companyProfile,
                meta: {
                    title: '公司简介',
                    activeTab: 1
                }
            },
            {
                path: 'corporateCulture',
                name: 'corporateCulture',
                component: corporateCulture,
                meta: {
                    title: '公司文化',
                    activeTab: 2
                }
            },
            {
                path: 'honor',
                name: 'honor',
                component: honor,
                meta: {
                    title: '荣誉资质',
                    activeTab: 3
                }
            },
            {
                path: 'cooperativePartner',
                name: 'cooperativePartner',
                component: cooperativePartner,
                meta: {
                    title: '合作伙伴',
                    activeTab: 4
                }
            },
            {
                path: 'recruit',
                name: 'recruit',
                component: recruit,
                meta: {
                    title: '招贤纳财',
                    activeTab: 5
                }
            },
            {
                path: 'contactUs',
                name: 'contactUs',
                component: contactUs,
                meta: {
                    title: '联系我们',
                    activeTab: 6
                }
            }
        ]
    }
];
