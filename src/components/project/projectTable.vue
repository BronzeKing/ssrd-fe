<template lang="pug">
    div
        el-select(v-if="show.status" tpye="card" v-model="query.type" placeholder="请选择项目类型" @change="resourceList")
            el-option(v-for="x in types" :key="x" :label="x" :value="x")
        el-input(v-if="show.search" placeholder="请输入要搜索的项目名称" suffix-icon="el-icon-search" v-model="query.search" @change="resourceList")
        el-table.mt10(v-loading="loading" :data="Project.t.Records" stripe highlight-current-row @row-click="rowClick" style="width: 100%")
            el-table-column(property="name" label="名称")
            el-table-column(property="type" label="项目类型")
            el-table-column(property="content" label="事项")
                template(slot-scope="scope")
                    el-popover(trigger="hover" placement="top")
                        p(v-for="(item, index) in scope.row.content" :key="index") {{item.name}}: {{ (item.text) }}
                        div(slot="reference" class="name-wrapper")
                            el-tag(v-for="(name, i) in scope.row.content" :key="i") {{name.name}}
            el-table-column(property="status" label="状态" :formatter='makeStatus')
            el-table-column(label="操作")
                template(slot-scope="scope")
                    el-button-group
                        el-button(type="text" @click="handleDocument(scope.row.id)") 资料
                        template(v-for="item in steps")
                            el-tooltip.item(effect="light" content="授权项目并生成授权码" placement="top" v-if="showing(TT.auth, item.title)")
                                el-button(type="text" :disabled="item.disable(scope.row.status)" href="javascript:;" @click="handleDialog(scope.row, item.title)")  {{item.title}}
                            el-tooltip.item(effect="light" content="项目签字并上传签字文件" placement="top" v-if="showing(TT.sign, item.title)")
                                el-button(type="text" :disabled="item.disable(scope.row.status)" href="javascript:;" @click="handleDialog(scope.row, item.title)") {{item.title}}
                            el-tooltip.item(effect="light" content="申请售后服务" placement="top" v-if="showing(TT.afterMarket, item.title)")
                                el-button(type="text" :disabled="item.disable(scope.row.status)" href="javascript:;" @click="handleAfterMarket(scope.row)") {{item.title}}
                            el-tooltip.item(effect="light" content="转发" placement="top" v-if="showing(TT.send, item.title)")
                                el-button(type="text" :disabled="item.disable(scope.row.status)" href="javascript:;" @click="handleDialog(scope.row, item.title)") {{item.title}}
                            el-tooltip.item(effect="light" content="审批或者驳回项目" placement="top" v-if="showing(TT.audit, item.title)")
                                el-button(type="text" :disabled="item.disable(scope.row.status)" href="javascript:;" @click="handleDialog(scope.row, item.title)") {{item.title}}
                            el-tooltip.item(effect="light" content="申请协助并留下协助记录" placement="top" v-if="showing(TT.assist, item.title)")
                                el-button(type="text" :disabled="item.disable(scope.row.status)" href="javascript:;" @click="handleDialog(scope.row, item.title)") {{item.title}}
                            el-tooltip.item(effect="light" content="记录每天的工作情况" placement="top" v-if="showing(TT.jobJournal, item.title)")
                                el-button(type="text" :disabled="item.disable(scope.row.status)" href="javascript:;" @click="handleDialog(scope.row, item.title)") {{item.title}}
                            el-tooltip.item(effect="light" content="上传设计文件并报价" placement="top" v-if="showing(TT.design, item.title)")
                                el-button(type="text" :disabled="item.disable(scope.row.status)" href="javascript:;" @click="handleDialog(scope.row, item.title)") {{item.title}}
                            el-tooltip.item(effect="light" content="发货并上传缺货清单" placement="top" v-if="showing(TT.delivery, item.title)")
                                el-button(type="text" :disabled="item.disable(scope.row.status)" href="javascript:;" @click="handleDialog(scope.row, item.title)") {{item.title}}
        el-pagination.mt5(v-show="show.pagination" @current-change="resourceList" :page-size="Project.t.pageSize" layout="prev, pager, next, jumper" :total="Project.t.PageCount" :current-page.sync="Project.t.pageIndex")

        el-dialog(:title="formConfig.title" :visible.sync="dialog")
            el-form(ref="form" :model="formData" :rules="rules" label-width="120px" label-position="right")
                template(v-for="(item, index) in formConfig.value")
                    el-form-item(:label="item.title" v-if="item.key === 'name'")
                        p {{Project.m.name}}
                    el-form-item(:label="item.name" v-if="item.key === 'dateType'")
                        el-col(:span="11")
                            el-date-picker(type="date" placeholder="选择日期" v-model="formData.date" style="width: 100%;")
                    el-form-item(:label="item.title" :error="AuthorizeCode.errors.name" v-if="item.key === 'auth'")
                        el-input(v-model="AuthorizeCode.m.name" auto-complete="off")
                    el-form-item(:label="item.title" prop="content" v-if="item.key === 'content'")
                        el-input(v-model="formData.content" auto-complete="off" type="textarea")
                    el-form-item(:label="item.title" v-if="item.key === 'dateType'")
                        el-cascader(:options="options.dateType" v-model="jobJournal.data.type")
                    el-form-item(:label="item.title" prop="lackingList" :error="errors.lackingList" v-if="item.key === 'lackingList'")
                        div
                            p 共计缺货
                            el-input-number(v-model="formData.lackingList" controls-position="right" :min="1")
                            p 项
                    el-form-item(:label="item.title" prop="attatchment" :error="ProjectLog.errors.attatchment" v-if="item.key === 'attatchment'")
                        el-upload(class="upload-demo" multiple :on-success="handleUploadChange" :file-list="formData.attatchment" :action="getUploadUrl(formConfig.name)")
                            el-button(size="small" type="primary") 点击上传
                            div(slot="tip" class="el-upload__tip")
                    el-button(@click="handleClose" v-if="item.key === 'close'") {{item.title}}
                    el-button(@click="handleRejected" v-if="item.key === 'rejected'") {{item.title}}
                    el-button(type='primary' @click="handleSubmit" v-if="item.key === 'submit'") {{item.title}}
</template>

<script src="./projectTable.ts" lang="ts">
</script>

<style lang="scss">
    .survey-wrap{
        background-color: #fff;
        margin-top: 20px;
        padding: 15px;
    }

</style>
