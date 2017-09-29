<template lang="pug">
    .page-error.tc {{`接口请求错误, 错误码： ${this.errorInfo}`}
</template>
<script>
// 资讯生活-公司新闻页面
export default{
    name: 'page-error',
    data () {
        return {
            errorInfo: null
        };
    },
    created () {
        this.errorInfo = this.$route.query.errorCode;
    }
};
</script>