<template lang="pug">
    .page-error.tc {{`接口请求错误, 错误码： ${this.errorInfo}`}
</template>
<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
export default class ErrorPage extends Vue
{
    @Provide() errorInfo = '';
    protected created () {
        this.errorInfo = this.$route.query.errorCode;
    }
};
</script>
