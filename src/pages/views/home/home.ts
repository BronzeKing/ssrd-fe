import { Component, Provide, Vue } from 'vue-property-decorator';

import  { IndustryLink, News, SystemCase } from 'apis';

import { crashBall } from 'components';

@Component
({
    components:{
        crashBall
    }
})
export default class Home extends Vue
{
    @Provide() homeBanners: Array<any> = [
        require('assets/home_banner.png'),
        require('assets/home_banner1.png'),
        require('assets/home_banner2.png')
    ];
    @Provide() IndustryLink = IndustryLink;
    @Provide() News = News;
    @Provide() SystemCase = SystemCase;
    
    /**
     * 创建钩子
     * @returns void
     */
    protected created(): void
    {
        // 获取新闻内容咯
        News.list({PageSize: 3});
        IndustryLink.list();
        SystemCase.list({PageSize: 3});
    }
};
