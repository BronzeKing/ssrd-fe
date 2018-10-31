<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ name: 'account' }") 个人中心
                el-breadcrumb-item(:to="{ name: 'manager' }") 管理中心
                el-breadcrumb-item 我的消息
        .information-wrap.mt10.p15
            .information-title
                h3.f16 {{Message.m.title}}
                p.f12.mb10.mt10 {{Message.m.created}}
            .line.mt10 
            p.mb10(v-html="Message.m.content")
                
        
</template>
<style lang="scss">
    @import "~scss/pages/views/information/new";
</style>
<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import  { Message } from 'src/apis';
@Component
export default class MessageDetail extends Vue
{
    @Provide() Message = Message;
    protected created () {
        Message.retrieve({ id: this.$route.params.id });
    }
};
</script>
