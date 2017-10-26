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

<script>
import  { Message } from 'apis';
export default {
    name: 'messageDetail',
    data () {
        return {
            Message: Message
        };
    },
    created () {
        Message.retrieve({id: this.$route.params.id});
    }
};
</script>
