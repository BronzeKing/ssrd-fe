<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item 首页
                el-breadcrumb-item 关于我们
                el-breadcrumb-item 招贤纳士
        .about-wrap.mt20
            el-input(placeholder="职位搜索" icon="search" v-model="inputValue" :on-icon-click="searchInfo")

</template>
<script>
import  { recruitments } from 'apis';
export default {
    name: 'home',
    data () {
        return  {
            inputValue: ''
        };
    },
    created () {
        // 获取新闻内容咯
        this.getInfo();
    },
    methods: {
        // 获取招聘
        getInfo () {
            recruitments({
                email: 'admin@test.com',
                password: 123456111
            }).then(res => {
                /* eslint-disable */
                console.log('homeres', res);
                /* eslint-enable */
            });
        },
        searchInfo () {
            recruitments({
                pk: this.inputValue
            }).then(res => {
                /* eslint-disable */
                console.log('homeres', res);
                /* eslint-enable */
            });
        }
    }
};
</script>
<style lang="scss">
    
</style>

