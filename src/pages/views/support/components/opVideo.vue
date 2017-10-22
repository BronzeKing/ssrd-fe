<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'support' }") 服务与支持
                el-breadcrumb-item 操作视频
        .about-wrap.mt10.p15
            el-input(placeholder="请输入要搜索的视频名称" icon="search" v-model="OpVideo.t.search" @change="OpVideo.list()")
            div(v-show="action==='list'" v-for="x in OpVideo.t.Records")
                router-link(:to="{ name: 'opVideoDetail', params: {id: x.id} }")
                    span.f16 {{x.name}}
                    span.f14.ml30 {{x.updated}}
                    .line.mt10 
            div(v-show="action==='detail'")
                    span.f16 {{OpVideo.m.name}}
                    span.f14.ml30 {{OpVideo.m.updated}}
        
</template>
<script>
import  { OpVideo } from 'apis';
export default {
    name: 'opVideo',
    data () {
        return {
            OpVideo: OpVideo,
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
                OpVideo.retrieve({id: this.$route.params.id});
            } else {
                OpVideo.list();
                this.action = 'list';
            }
        }
    }
};
</script>
