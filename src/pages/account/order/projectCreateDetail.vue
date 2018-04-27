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
                    template(v-if="data.name==='可视化劳务管理'")
                        el-form-item(label="区域")
                            div.project-detail-argbox(v-for="(item, index) in data.content.区域选择.items" :key="index")
                                span.detail-artbox-label {{item.name}}大门数量
                                el-input-number(v-model="item.value" controls-position="right" :min="0" :max="100000") 个
                        el-form-item(label="闸机类型")
                            div.project-detail-argbox(v-for="(item, index) in data.content.闸机.items" :key="index")
                                span.detail-artbox-label {{item.name}}数量
                                el-input-number(v-model="item.value" controls-position="right" :min="0" :max="100000") 个
                        el-form-item(label="通行方式")
                            div.project-detail-argbox(v-for="(item, index) in data.content.通行方式.items" :key="index")
                                span.detail-artbox-label {{item.name}}
                                el-input-number(v-model="item.value" controls-position="right" :min="0" :max="100000") 个
                        el-form-item(label="扩展功能")
                            el-checkbox-group(v-model="data.content.扩展功能.value")
                                el-checkbox(v-for="(item, index) in data.content.扩展功能.items" :key="index" :label="item.name")
                        el-form-item(label="发卡中心位置")
                            el-checkbox-group(v-model="data.content.发卡中心.value")
                                el-checkbox(v-for="(item, index) in data.content.发卡中心.items" :key="index" :label="item.name")
                        el-form-item(label="入场劳务人员数量")
                            el-input-number(v-model="data.content.入场劳务人员数量" controls-position="right" :min="0" :max="100000") 个
                        el-form-item(label="备注")
                            el-input(v-model="data.content.remark" type="textarea")

                    template(v-if="data.name==='智能化视频监控'")
                        el-form-item(label="区域")
                            div(v-for="(item, index) in data.content.区域选择.items" :key="index")
                                p {{item.name}}大门数量
                                el-input-number(v-model="item.value" controls-position="right" :min="0" :max="100000") 个
                        el-form-item(label="监控位置")
                            div(v-for="(item, index) in data.content.监控位置.items" :key="index")
                                p {{item.name}}
                                el-input-number(v-model="item.value" controls-position="right" :min="0" :max="100000") 个
                        el-form-item(label="现场施工图纸")
                            el-radio(v-for="(item, index) in data.content.现场施工图纸.items" :key="index" v-model="data.content.现场施工图纸.value" :label="item.name") {{item.name}}
                        el-form-item(label="备注")
                            el-input(v-model="data.content.remark" type="textarea")
                    template(v-if="data.name==='专业工地车辆出入管理'")
                        el-form-item(label="大门数量")
                            el-input-number(v-model="data.content.door" controls-position="right" :min="0" :max="100000") 个
                        el-form-item(label="尺寸")
                            div(v-for="(item, index) in data.content.尺寸.items" :key="index")
                                p {{item.name}}
                                el-input-number(v-model="item.value" controls-position="right" :min="0" :max="100000") 个
                        el-form-item(label="模式选择")
                            el-checkbox-group(v-model="data.content.模式选择.value")
                                el-checkbox(v-for="(item, index) in data.content.模式选择.items" :key="index" :label="item.name")
                        el-form-item(label="功能选择")
                            el-checkbox-group(v-model="data.content.功能选择.value")
                                el-checkbox(v-for="(item, index) in data.content.功能选择.items" :key="index" :label="item.name")
                        el-form-item(label="备注")
                            el-input(v-model="data.content.remark" type="textarea")
                    template(v-if="data.name==='综合数据采集远程传输'")
                        el-form-item(label="区域选择")
                            el-checkbox-group(v-model="data.content.区域选择.value")
                                el-checkbox(v-for="(item, index) in data.content.区域选择.items" :key="index" :label="item.name")
                        el-form-item(label="功能选择")
                            el-checkbox-group(v-model="data.content.功能选择.value")
                                el-checkbox(v-for="(item, index) in data.content.功能选择.items" :key="index" :label="item.name")
                        el-form-item(label="显示方式")
                            el-checkbox-group(v-model="data.content.显示方式.value")
                                el-checkbox(v-for="(item, index) in data.content.显示方式.items" :key="index" :label="item.name")
                        el-form-item(label="备注")
                            el-input(v-model="data.content.remark" type="textarea")
                    template(v-if="data.name==='塔机安全防碰撞系统'")
                        el-form-item(label="类型")
                            el-checkbox-group(v-model="data.content.类型.value")
                                el-checkbox(v-for="(item, index) in data.content.类型.items" :key="index" :label="item.name")
                        el-form-item(label="可选功能")
                            el-checkbox-group(v-model="data.content.可选功能.value")
                                el-checkbox(v-for="(item, index) in data.content.可选功能.items" :key="index" :label="item.name")
                        el-form-item(label="备注")
                            el-input(v-model="data.content.remark" type="textarea")
                    template(v-if="data.name==='多媒体音视频输出体系'")
                        el-form-item(label="房间数量")
                            el-input-number(v-model="data.content.房间数量" controls-position="right" :min="0" :max="100000") 间
                        el-form-item(label="房间尺寸")
                            div(v-for="(item, index) in data.content.房间尺寸.items" :key="index")
                                p {{item.name}}
                                el-input-number(v-model="item.value" controls-position="right" :min="0" :max="100000") 个
                        el-form-item(label="功能选择")
                            el-checkbox-group(v-model="data.content.功能选择.value")
                                el-checkbox(v-for="(item, index) in data.content.功能选择.items" :key="index" :label="item.name")
                        el-form-item(label="备注")
                            el-input(v-model="data.content.remark" type="textarea")
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
