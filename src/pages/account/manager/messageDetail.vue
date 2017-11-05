<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ name: 'account' }") 个人中心
                el-breadcrumb-item(:to="{ name: 'manager' }") 管理中心
                el-breadcrumb-item 我的消息
        div
            p {{Message.m.title}} 
            p {{Message.m.created}} 

            p 其他
            p {{Message.m.content}} 
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import  { Message } from 'apis';
@Component
export default class MessageDetail extends Vue
{
    @Provide() Message = Message;
    protected created () {
        Message.retrieve({id: this.$route.params.id});
    }
};
</script>
