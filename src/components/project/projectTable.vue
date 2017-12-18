<template lang="pug">
    div
        el-input(v-show="show.search" placeholder="请输入要搜索的项目名称" suffix-icon="el-icon-search" v-model="Project.t.search" @change="Project.list()")
        el-table.mt10(:data="Project.t.Records" stripe highlight-current-row @row-click="rowClick" style="width: 100%")
            el-table-column(property="name" label="名称")
            el-table-column(property="type" width="100" label="项目类型")
            el-table-column(property="content" label="事项" :formatter='makeContent')
            el-table-column(property="status" label="状态" :formatter='makeStatus')
            el-table-column(label="操作")
                template(slot-scope="scope")
                    template(v-for="item in permissions")
                        el-button-group
                            el-tooltip.item(effect="light" content="授权项目并生成授权码" placement="top" v-if="inPermission('授权', item)")
                                el-button(type="text" href="javascript:;" @click="handleDialog(scope.row, item)")  {{item}}
                            el-tooltip.item(effect="light" content="项目签字并上传签字文件" placement="top" v-if="inPermission('签字', item)")
                                el-button(type="text" href="javascript:;" @click="handleDialog(scope.row, item)") {{item}}
                            el-tooltip.item(effect="light" content="申请售后服务" placement="top" v-if="inPermission('售后申请', item)")
                                el-button(type="text" href="javascript:;" @click="handleAfterMarket(scope.row)") {{item}}
                            el-tooltip.item(effect="light" content="审批或者驳回项目" placement="top" v-if="inPermission('审核', item)")
                                el-button(type="text" href="javascript:;" @click="handleDialog(scope.row, item)") {{item}}
                            el-tooltip.item(effect="light" content="申请协助并留下协助记录" placement="top" v-if="inPermission('协助申请', item)")
                                el-button(type="text" href="javascript:;" @click="handleDialog(scope.row, item)") {{item}}
                            el-tooltip.item(effect="light" content="记录每天的工作情况" placement="top" v-if="inPermission('工作日志', item)")
                                el-button(type="text" href="javascript:;" @click="handleDialog(scope.row, item)") {{item}}
                            el-tooltip.item(effect="light" content="上传设计文件并报价" placement="top" v-if="inPermission(' 设计报价', item)")
                                el-button(type="text" href="javascript:;" @click="handleDialog(scope.row, item)") {{item}}
                            el-tooltip.item(effect="light" content="发货并上传缺货清单" placement="top" v-if="inPermission('发货', item)")
                                el-button(type="text" href="javascript:;" @click="handleDialog(scope.row, item)") {{item}}
        el-pagination.mt5(v-show="show.pagination" @current-change="Project.list" :page-size="Project.t.pageSize" layout="prev, pager, next, jumper" :total="Project.t.PageCount" :current-page.sync="Project.t.pageIndex")

        el-dialog(:title="formConfig.title" :visible.sync="dialog.show")
            el-form(ref="form" :model="formData" :rules="rules" label-width="120px" label-position="right")
                template(v-for="(item, index) in formConfig.value")
                    el-form-item(:label="item.title" v-if="item.key === 'name'")
                        p {{Project.m.name}}
                    el-form-item(:label="item.name" v-if="item.key === 'dateType'")
                        el-col(:span="11")
                            el-date-picker(type="date" placeholder="选择日期" v-model="jobJournal.data.date" style="width: 100%;")
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
                        el-upload(class="upload-demo" multiple :on-success="handleChange" :file-list="ProjectLog.m.attatchment" :action="uploadUrl(item.name)")
                            el-button(size="small" type="primary") 点击上传
                            div(slot="tip" class="el-upload__tip") 只能上传jpg/png文件，且不超过500kb
                    el-button(@click="handleClose" v-if="item.key === 'close'") {{item.title}}
                    el-button(@click="handleRejected" v-if="item.key === 'rejected'") {{item.title}}
                    el-button(type='primary' @click="handleSubmit" v-if="item.key === 'submit'") {{item.title}}
</template>

<script src="./projectTable.ts" lang="ts">
</script>