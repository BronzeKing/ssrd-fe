<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'order' }") 订单中心
                el-breadcrumb-item 我的收藏
        div
            p(v-show="!Collect.t.Records.length") 暂无收藏记录
            el-row
                el-col(:span="8" v-for="(item, index) in Collect.t.Records" :key="index")
                    router-link(:to="{name: 'product', params: {id: index}}")
                        el-card(:body-style="{ padding: '0px' }")
                            img(:src="item.product.background" class="image")
                            div(style="padding: 14px;")
                                span {{item.product.name}}
                                div(class="bottom clearfix")
                                    el-button(type="text" class="button" @click="destroy(item.id)") 取消收藏

</template>
<script lang="ts">
// 新建项目
/**
* #TODO 目前el-col样式未完成，直接用的官网的demo
*/
import { Component, Provide, Vue } from 'vue-property-decorator';
import  { Collect } from 'src/apis';
@Component
export default class MyCollection extends Vue
{
    @Provide() Collect = Collect;
    protected created () {
        Collect.list();
    }
    public destroy(id: number) {
        Collect.destroy({id: id}).then(() => {
            Collect.list();
        })
    }
};
</script>

<style>
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

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
