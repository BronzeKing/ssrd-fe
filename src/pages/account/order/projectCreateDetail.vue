<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'project' }") 项目中心
                el-breadcrumb-item 新建项目
        div(v-show="action==='settle'")
            el-form(ref="settleForm" :model="Project" label-width="80px")
                el-form-item(label="工期" :error="Project.errors.duration")
                    el-input-number(v-model="Project.m.duration" controls-position="right" :min="1" :max="100000") 天
                el-form-item(label="预算" :error="Project.errors.budget")
                    el-input-number(v-model="Project.m.budget" controls-position="right" :min="1" :max="100000") 元
                .line.mt10 
                el-form-item(label="项目名称")
                    el-input(v-model="Project.m.name" auto-complete="off")
                el-form-item(label="联系人" :error="Project.errors.linkman")
                    el-input(v-model="Project.m.linkman" :placeholder='Profile.m.name')
                el-form-item(label="所属公司" :error="Project.errors.company")
                    el-input(v-model="Project.m.company" :placeholder="Profile.m.company")
                el-form-item(label="手机" :error="Project.errors.mobile")
                    el-input(v-model="Project.m.mobile" :placeholder="Profile.m.user.email")
                el-form-item(label="备注" :error="Project.errors.remark")
                    el-input(v-model="Project.m.remark" type="textare备注" autosize)
                el-button(type="primary" @click="submit") 提交
                el-button(type="primary" @click="cancel") 重置
        div(v-show="action==='create'")
            div(v-show="index===0")
                el-form(ref="form" :model="labor" label-width="80px")
                    el-form-item(label="区域")
                        div.project-detail-argbox(v-for="(item, index) in labor.区域选择.items" :key="index")
                            span.detail-artbox-label {{item.name}}大门数量
                            el-input-number(v-model="item.value" controls-position="right" :min="1" :max="100000") 个
                    el-form-item(label="闸机类型")
                        div.project-detail-argbox(v-for="(item, index) in labor.闸机.items" :key="index")
                            span.detail-artbox-label {{item.name}}数量
                            el-input-number(v-model="item.value" controls-position="right" :min="1" :max="100000") 个
                    el-form-item(label="通行方式")
                        div.project-detail-argbox(v-for="(item, index) in labor.通行方式.items" :key="index")
                            span.detail-artbox-label {{item.name}}
                            el-input-number(v-model="item.value" controls-position="right" :min="1" :max="100000") 个
                    el-form-item(label="扩展功能")
                      el-checkbox-group(v-model="labor.扩展功能.value")
                        el-checkbox(v-for="(item, index) in labor.扩展功能.items" :key="index" :label="item.name")
                    el-form-item(label="发卡中心位置")
                      el-checkbox-group(v-model="labor.发卡中心.value")
                        el-checkbox(v-for="(item, index) in labor.发卡中心.items" :key="index" :label="item.name")
                    el-form-item(label="入场劳务人员数量")
                        el-input-number(v-model="labor.入场劳务人员数量" controls-position="right" :min="1" :max="100000") 个
                    el-form-item(label="备注")
                        el-input(v-model="labor.备注" type="textarea")
                    el-button(type="primary" @click="submit") 加入购物车
                    el-button(type="primary" @click="cancel") 重置

            div(v-show="index===1")
                el-form(ref="form" :model="monitor" label-width="80px")
                    el-form-item(label="区域")
                        div(v-for="(item, index) in monitor.区域选择.items" :key="index")
                            p {{item.name}}大门数量
                            el-input-number(v-model="item.value" controls-position="right" :min="1" :max="100000") 个
                    el-form-item(label="监控位置")
                        div(v-for="(item, index) in monitor.监控位置.items" :key="index")
                            p {{item.name}}
                            el-input-number(v-model="item.value" controls-position="right" :min="1" :max="100000") 个
                    el-form-item(label="现场施工图纸")
                      el-radio(v-for="(item, index) in monitor.现场施工图纸.items" :key="index" v-model="monitor.现场施工图纸.value" :label="item.name") {{item.name}}
                    el-form-item(label="备注")
                        el-input(v-model="monitor.备注" type="textarea")
                    el-button(type="primary" @click="submit") 加入购物车
                    el-button(type="primary" @click="cancel") 重置

            div(v-show="index===2")
                el-form(ref="form" :model="car" label-width="80px")
                    el-form-item(label="大门数量")
                        el-input-number(v-model="car.door" controls-position="right" :min="1" :max="100000") 个
                    el-form-item(label="尺寸")
                        div(v-for="(item, index) in car.尺寸.items" :key="index")
                            p {{item.name}}
                            el-input-number(v-model="item.value" controls-position="right" :min="1" :max="100000") 个
                    el-form-item(label="模式选择")
                      el-checkbox-group(v-model="car.模式选择.value")
                        el-checkbox(v-for="(item, index) in car.模式选择.items" :key="index" :label="item.name")
                    el-form-item(label="功能选择")
                      el-checkbox-group(v-model="car.功能选择.value")
                        el-checkbox(v-for="(item, index) in car.功能选择.items" :key="index" :label="item.name")
                    el-form-item(label="备注")
                        el-input(v-model="car.备注" type="textarea")
                    el-button(type="primary" @click="submit") 加入购物车
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

