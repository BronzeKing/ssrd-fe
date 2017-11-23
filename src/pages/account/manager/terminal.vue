<template lang="pug">
    div.project-create
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'order' }") 订单中心
                el-breadcrumb-item 新建项目
        div
            el-row(:gutter="20")
                el-col(:span="8" class="project-create-item mb20" v-for="(item, index) in Terminal.t.Records" :key="index")
                    a(:href="item.link")
                        el-card(:body-style="{ padding: '0px' }")
                            img.project-create-image(:src="item.picture" class="image")
                            div(style="padding: 14px;")
                                span {{item.name}}

</template>
<script lang="ts">
// 新建项目
/**
* #TODO 目前el-col样式未完成，直接用的官网的demo
*/
import { Component, Provide, Vue } from 'vue-property-decorator';
import  { Terminal } from 'apis';
@Component
export default class TerminalView extends Vue
{
    @Provide() Terminal = Terminal;
    protected created () {
        Terminal.list();
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
