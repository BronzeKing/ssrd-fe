<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'project' }") 项目中心
                el-breadcrumb-item 新建项目
        div
            div(v-for="item in System.t.Records" :key="item.id")
                img(:src="item.picture")
                router-link(:to="{name: 'projectCreateDetail', params: {id: item.id} }")
                    p {{item.name}}

</template>
<script lang="ts">
// 新建项目
import { Component, Provide, Vue } from 'vue-property-decorator';
import  { System } from 'apis';
@Component
export default class ProjectCreate extends Vue
{
    @Provide() System = System;
    protected created () {
        System.list();
    }
};
</script>
