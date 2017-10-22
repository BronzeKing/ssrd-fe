<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ path: '/information' }") 资讯生活
                el-breadcrumb-item 公司新闻
        .about-wrap.mt10.p15
            el-input(placeholder="请输入要搜索的新闻" icon="search" v-model="News.t.search" @change="News.list()")
            div(v-show="action==='list'" v-for="x in News.t.Records")
                router-link(:to="{ name: 'newsDetail', params: {id: x.id} }")
                    span.f16 {{x.title}}
                    span.f14.ml30 {{x.content}}
                    span.f14.ml30 {{x.created}}
                    .line.mt10 
            div(v-show="action==='detail'")
                    span.f16 {{News.m.title}}
                    span.f14.ml30 {{News.m.content}}
                    span.f14.ml30 {{News.m.created}}
        
</template>
<script>
import  { News } from 'apis';
export default {
    name: 'news',
    data () {
        return {
            News: News,
            action: 'list'
        };
    },
    created () {
        this.init();
    },
    watch: {
    // 如果路由有变化，会再次执行该方法
        '$route': 'init'
    },
    methods: {
        init () {
            if (this.$route.params.id) {
                this.action = 'detail';
                News.retrieve({id: this.$route.params.id});
            } else {
                News.list();
                this.action = 'list';
            }
        }
    }
};
</script>
