<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'support' }") 服务与支持
                el-breadcrumb-item 常见问题解答
        .about-wrap.mt10.p15
            el-input(placeholder="请输入要搜索的FAQ" icon="search" v-model="Faqs.t.search" @change="Faqs.list()")
            div(v-show="action==='list'" v-for="x in Faqs.t.Records")
                router-link(:to="{ name: 'faqsDetail', params: {id: x.id} }")
                    span.f16 {{x.questioin}}
                    span.f14.ml30 {{x.created}}
                    .line.mt10 
            div(v-show="action==='detail'")
                    span.f16 {{Faqs.m.questioin}}
                    span.f14.ml30 {{Faqs.m.answer}}
                    span.f14.ml30 {{Faqs.m.created}}
        
</template>
<script>
import  { Faqs } from 'apis';
export default {
    name: 'faqs',
    data () {
        return {
            Faqs: Faqs,
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
                Faqs.retrieve({id: this.$route.params.id});
            } else {
                Faqs.list();
                this.action = 'list';
            }
        }
    }
};
</script>
