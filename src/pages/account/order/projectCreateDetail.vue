<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'order' }") 订单中心
                el-breadcrumb-item(:to="{ name: 'projectCreate' }") 新建项目
                el-breadcrumb-item {{System.m.name}}
        div
            el-form(ref="form" :model="index" label-width="80px")
                template(v-for="data in dataSet" v-if="System.m.name === data.name")
                    el-form-item(v-for='item in data.content' :label="item.name" :key="item.name")
                        template(v-if="item.type==='multiCheck'")
                            el-checkbox-group(v-model="item.value")
                                el-checkbox(v-for="option in item.items" :key="option.name" :label="option.name")
                        template(v-if="item.type==='multiInput'")
                            div.project-detail-argbox(v-for="option in item.items" :key="option.name")
                                span.detail-artbox-label {{option.name}}数量
                                el-input-number(v-model="option.value" controls-position="right" :min="0" :max="100000") {{option.unit}}
                        template(v-if="item.type==='checkBox'")
                            el-radio(v-for="(option, index) in item.items" :key="index" v-model="item.value" :label="option.name") {{option.name}}
                        template(v-if="item.type==='inputText'")
                            el-input(v-model="item.value" type="textarea")
                        template(v-if="item.type==='input'")
                            el-input-number(v-model="item.value" controls-position="right" :min="0" :max="100000") {{item.unit}}
                el-button(type="primary" @click="submit") 立即新建
                el-button(type="primary" @click="addToCart") 加入购物车
                el-button(type="primary" @click="cancel") 重置

</template>
<script lang="ts" src="./projectCreateDetail.ts">
</script>
<style lang="scss">
    .project-detail-argbox{
        line-height: 50px;
        .detail-artbox-label{
            display: inline-block;
            min-width: 120px;
        }
    }
</style>
