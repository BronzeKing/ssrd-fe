<template lang="pug">
    div.project-create
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'order' }") 订单中心
                el-breadcrumb-item 新建项目
        div
            el-row(:gutter="20")
                el-col(:span="8" class="project-create-item mb20" v-for="(item, index) in System.t.Records" :key="index")
                    router-link(:to="{name: 'projectCreateDetail', params: {id: index}}")
                        el-card(:body-style="{ padding: '0px' }")
                            img.project-create-image(:src="item.picture" class="image")
                            div(style="padding: 14px;")
                                span {{item.name}}
                                div(class="bottom clearfix")
                                    el-button(type="text" class="button") 新建

</template>
<script lang="ts">
// 新建项目
/**
* #TODO 目前el-col样式未完成，直接用的官网的demo
*/
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

<style lang="scss">

.project-create-image{
    min-height: 204px;
}
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }
</style>
