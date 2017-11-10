<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'project' }") 项目中心
                el-breadcrumb-item 新建项目
        div
            div(v-show="index===0")
                el-form(ref="form" :model="data" label-width="80px")
                    el-form-item(label="区域")
                        el-select(v-model="data.area" placeholder="请选择")
                            el-option(v-for="(item, index) in  options.area" :key="index" :label="item.name" :value="item.value")
                    el-form-item(label="大门数量")
                        el-input-number(v-model="data.door" controls-position="right" :min="1" :max="100000")
                    el-form-item(label="闸机类型")
                        el-select(v-model="data.gate" placeholder="请选择")
                            el-option(v-for="(item, index) in  options.gate" :key="index" :label="item.name" :value="item.value")
                    el-form-item(label="闸机数量")
                        el-input-number(v-model="data.gateNumber" controls-position="right" :min="1" :max="100000")
                    el-form-item(label="通行方式")
                        el-select(v-model="data.passage" placeholder="请选择")
                            el-option(v-for="(item, index) in  options.passage" :key="index" :label="item.name" :value="item.value")
                    el-form-item(label="数量")
                        el-input-number(v-model="data.passageNumber" controls-position="right" :min="1" :max="100000")
                    el-form-item(label="扩展功能")
                        el-select(v-model="data.extension" placeholder="请选择")
                            el-option(v-for="(item, index) in  options.extension" :key="index" :label="item.name" :value="item.value")
                    el-form-item(label="发卡中心")
                        el-select(v-model="data.center" placeholder="请选择")
                            el-option(v-for="(item, index) in  options.center" :key="index" :label="item.name" :value="item.value")
                    el-form-item(label="备注")
                        el-input(v-model="data.remark" type="textarea")
                    el-button(type="primary" @click="submit") 加入购物车
                    el-button(type="primary" @click="cancel") 重置


</template>
<script lang="ts" src="./projectCreateDetail.ts">
</script>
