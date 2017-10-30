<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'project' }") 项目中心
                el-breadcrumb-item 项目动态
        .information-wrap.mt10.p15
            el-tabs(tpye="card" v-model="activeTab"  @tab-click="clickTab")
                el-tab-pane(v-for="x in tabs" :key="x" :label="x")
            el-input(placeholder="请输入要搜索的项目名称" suffix-icon="el-icon-search" v-model="Project.t.search" @change="Project.list()")
            el-table.mt10(:data="Project.t.Records" stripe highlight-current-row @row-click="rowClick" style="width: 100%")
                el-table-column(property="name" label="名称")
                el-table-column(property="type" label="项目类型")
                el-table-column(property="events" label="事项")
                el-table-column(label="操作")
                    template(slot-scope="scope")
                        el-button(size="mini" @click="handleDialog(scope.row, 'auth')") 授权
                        el-button(size="mini" @click="handleDialog(scope.row, 'sign')") 签字
                        router-link(:to="{name: 'home'}")
                            el-button(size="mini") 售后申请
                        el-button(size="mini" @click="handleDialog(scope.row, 'audit')") 审核
                        el-button(size="mini" @click="handleDialog(scope.row, 'assist')") 协助申请
                        el-button(size="mini" @click="handleDialog(scope.row, 'jobJournal')") 工作日志
                        el-button(size="mini" @click="handleDialog(scope.row, 'design')") 设计/报价
                        el-button(size="mini" @click="handleDialog(scope.row, 'delivery')") 发货
            el-pagination.mt5(@current-change="Project.list" :page-size="Project.t.pageSize" layout="prev, pager, next, jumper" :total="Project.t.PageCount" :current-page.sync="Project.t.pageIndex")

            el-dialog(title="项目授权" :visible.sync="dialog.auth")
                el-form(ref="AuthForm" :model="AuthorizeCode.m" :rules="AuthorizeCode.rules" label-width="80px" label-position="left")
                    el-form-item(label="项目名称")
                        p 项目名称 {{Project.m.name}}
                    el-form-item(label="授权码名称" prop="name" :error="AuthorizeCode.errors.name")
                        el-input(v-model="AuthorizeCode.m.name" auto-complete="off")
                el-button(@click="dialog.auth = false") 取消
                el-button(type="primary" @click="handleAuth") 确定

            el-dialog(title="项目签字" :visible.sync="dialog.sign")
                el-form(ref="SignForm" :model="ProjectSign.m" :rules="ProjectSign.rules" label-width="80px" label-position="left")
                    el-form-item(label="项目名称")
                        p 项目名称 {{Project.m.name}}
                    el-form-item(label="签字文件" prop="attatchment" :error="ProjectSign.errors.attatchment")
                        el-upload(class="upload-demo" multiple :on-change="handleChange" :file-list="ProjectSign.m.attatchment" action="https://jsonplaceholder.typicode.com/posts/" :auto-upload="false")
                            el-button(size="small" type="primary") 点击上传
                            div(slot="tip" class="el-upload__tip") 只能上传jpg/png文件，且不超过500kb
                el-button(@click="dialog.sign = false") 取消
                el-button(type="primary" @click="handleSign") 确定
                
            el-dialog(title="项目审核" :visible.sync="dialog.audit")
                el-form(ref="AuditForm" :model="audit.data" :rules="audit.rules" label-width="80px" label-position="left")
                    el-form-item(label="项目名称")
                        p 项目名称 {{Project.m.name}}
                    el-form-item(label="审核内容" prop="content" :error="audit.errors.content")
                        el-input(v-model="audit.data.content" auto-complete="off" type="textarea")
                el-button(@click="dialog.audit = false") 取消
                el-button(@click="dialog.audit = false") 驳回
                el-button(type="primary" @click="handleSign") 通过

            el-dialog(title="协助申请" :visible.sync="dialog.assist")
                el-form(ref="AssistForm" :model="assist.data" :rules="assist.rules" label-width="80px" label-position="left")
                    el-form-item(label="项目名称")
                        p 项目名称 {{Project.m.name}}
                    el-form-item(label="协助内容" prop="content" :error="assist.errors.content")
                        el-input(v-model="assist.data.content" auto-complete="off" type="textarea")
                el-button(@click="dialog.assist = false") 取消
                el-button(type="primary" @click="handleAssist") 确认

            el-dialog(title="工作日志" :visible.sync="dialog.jobJournal")
                el-form(ref="JobJournalForm" :model="jobJournal.data" :rules="jobJournal.rules" label-width="80px" label-position="left")
                    el-form-item(label="项目名称")
                        p 项目名称 {{Project.m.name}}
                    el-form-item(label="工作日期")
                        el-col(:span="11")
                            el-date-picker(type="date" placeholder="选择日期" v-model="jobJournal.data.date" style="width: 100%;")
                    el-form-item(label="工作内容" prop="content" :error="jobJournal.errors.content")
                        el-input(v-model="jobJournal.data.content" auto-complete="off" type="textarea")
                    el-form-item(label="照片类型")
                        el-cascader(:options="jobJournal.data.options" v-model="jobJournal.data.type")
                    el-form-item(label="工作照片" prop="attatchment" :error="jobJournal.errors.attatchment")
                        el-upload(class="upload-demo" multiple :on-change="handleChange" :file-list="jobJournal.data.attatchment" action="https://jsonplaceholder.typicode.com/posts/" :auto-upload="false")
                            el-button(size="small" type="primary") 点击上传
                            div(slot="tip" class="el-upload__tip") 只能上传jpg/png文件，且不超过500kb
                el-button(@click="dialog.jobJournal = false") 取消
                el-button(type="primary" @click="handleJobJournal") 确认

            el-dialog(title="上传设计文件及报价" :visible.sync="dialog.design")
                el-form(ref="DesignForm" :model="design.data" :rules="design.rules" label-width="80px" label-position="left")
                    el-form-item(label="项目名称")
                        p 项目名称 {{Project.m.name}}
                    el-form-item(label="报价" prop="price" :error="design.errors.price")
                        el-input(v-model="jobJournal.data.content" auto-complete="off")
                    el-form-item(label="设计文件" prop="attatchment" :error="design.errors.attatchment")
                        el-upload(class="upload-demo" multiple :on-change="handleChange" :file-list="design.data.attatchment" action="https://jsonplaceholder.typicode.com/posts/" :auto-upload="false")
                            el-button(size="small" type="primary") 点击上传
                            div(slot="tip" class="el-upload__tip") 只能上传jpg/png文件，且不超过500kb
                el-button(@click="dialog.design = false") 取消
                el-button(type="primary" @click="handleJobJournal") 确认

            el-dialog(title="项目发货记录" :visible.sync="dialog.delivery")
                el-form(ref="DeliveryForm" :model="delivery.data" :rules="delivery.rules" label-width="80px" label-position="left")
                    el-form-item(label="项目名称")
                        p 项目名称 {{Project.m.name}}
                    el-form-item(label="缺货清单" prop="number" :error="delivery.errors.number")
                        div
                            p 共计缺货
                            el-input-number(v-model="design.data.number" controls-position="right" :min="1")
                            p 项
                    el-form-item(label="缺货清单文件" prop="attatchment" :error="delivery.errors.attatchment")
                        el-upload(class="upload-demo" multiple :on-change="handleChange" :file-list="delivery.data.attatchment" action="https://jsonplaceholder.typicode.com/posts/" :auto-upload="false")
                            el-button(size="small" type="primary") 点击上传
                            div(slot="tip" class="el-upload__tip") 只能上传jpg/png文件，且不超过500kb
                el-button(@click="dialog.delivery = false") 取消
                el-button(type="primary" @click="handleDelivery") 确认
</template>

<script>
import  { Project, AuthorizeCode, ProjectSign } from 'apis';
export default {
    name: 'project',
    data () {
        return {
            Project: Project,
            audit: {
                errors: {
                    content: ''
                },
                rules: {
                    content: [{
                        required: true,
                        message: '请填写审核意见',
                        trigger: 'blur'
                    }]
                },
                data: {
                    content: ''
                }
            },
            assist: {
                errors: {
                    content: ''
                },
                rules: {
                    content: [{
                        required: true,
                        message: '请填写审核意见',
                        trigger: 'blur'
                    }]
                },
                data: {
                    content: ''
                }
            },
            jobJournal: {
                errors: {
                    content: '',
                    date: ''
                },
                rules: {
                    date: [{
                        required: true,
                        message: '请选择工作日期',
                        trigger: 'blur'
                    }],
                    content: [{
                        required: true,
                        message: '请填写审核意见',
                        trigger: 'blur'
                    }]
                },
                data: {
                    content: '',
                    type: [],
                    date: new Date(),
                    attatchment: [],
                    options: [{
                        value: 'enterInto',
                        label: '进场照片',
                        children: [{
                            value: 'admission', label: '进场凭证'
                        }, {
                            value: 'implement', label: '施工凭证'
                        }, {
                            value: 'complete', label: '竣工凭证'
                        }, {
                            value: 'checked', label: '验收凭证'
                        }, {
                            value: 'other', label: '其他'
                        }]
                    }, {
                        value: 'leave',
                        label: '离场照片',
                        children: [{
                            value: 'admission', label: '进场凭证'
                        }, {
                            value: 'implement', label: '施工凭证'
                        }, {
                            value: 'complete', label: '竣工凭证'
                        }, {
                            value: 'checked', label: '验收凭证'
                        }, {
                            value: 'other', label: '其他'
                        }]
                    }]
                }
            },
            design: {
                errors: {
                    attatchment: '',
                    price: ''
                },
                rules: {
                    price: [{
                        required: true,
                        message: '请填写报价',
                        trigger: 'blur'
                    }],
                    attatchment: [{
                        required: true,
                        message: '请上传设计文件',
                        trigger: 'blur'
                    }]
                },
                data: {
                    price: '',
                    attatchment: []
                }
            },
            delivery: {
                errors: {
                    attatchment: '',
                    number: ''
                },
                rules: {
                    number: [{
                        required: true,
                        message: '请填写缺货项',
                        trigger: 'blur'
                    }],
                    attatchment: [{
                        required: true,
                        message: '请上传缺货清单',
                        trigger: 'blur'
                    }]
                },
                data: {
                    number: '',
                    attatchment: []
                }
            },
            ProjectSign: ProjectSign,
            AuthorizeCode: AuthorizeCode,
            activeTab: 0,
            tabs: ['全部项目', '进度类', '维护类', '签证类'],
            dialog: {auth: false, sign: false, afterSale: false, audit: false, assist: false, jobJournal: false, design: false, delivery: false}
        };
    },
    created () {
        Project.list();
    },
    methods: {
        rowClick (m) {
        },
        clickTab (tab, event) {
            Project.list();
        },
        handleAuth () {
            this.$refs.AuthForm.validate(v => {
                if (v) {
                    this.dialog.auth = false;
                    AuthorizeCode.create({name: AuthorizeCode.m.name, projectId: Project.m.id}).then(r => {
                        this.$message({
                            message: '授权成功',
                            type: 'success'
                        });
                    });
                };
            });
        },
        handleSign () {
            this.$refs.SignForm.validate(v => {
                if (v) {
                    this.dialog.sign = false;
                    AuthorizeCode.create({name: AuthorizeCode.m.name, projectId: Project.m.id}).then(r => {
                        this.$message({
                            message: '签字成功',
                            type: 'success'
                        });
                    });
                };
            });
        },
        handleAssist () {
            this.$refs.AssistForm.validate(v => {
                if (v) {
                    this.dialog.assist = false;
                    AuthorizeCode.create({name: AuthorizeCode.m.name, projectId: Project.m.id}).then(r => {
                        this.$message({
                            message: '签字成功',
                            type: 'success'
                        });
                    });
                };
            });
        },
        handleJobJournal () {
            this.$refs.JobJournalForm.validate(v => {
                if (v) {
                    this.dialog.jobJournal = false;
                    AuthorizeCode.create({name: AuthorizeCode.m.name, projectId: Project.m.id}).then(r => {
                        this.$message({
                            message: '签字成功',
                            type: 'success'
                        });
                    });
                };
            });
        },
        handleDesign () {
            this.$refs.DesignForm.validate(v => {
                if (v) {
                    this.dialog.desgin = false;
                    AuthorizeCode.create({name: AuthorizeCode.m.name, projectId: Project.m.id}).then(r => {
                        this.$message({
                            message: '签字成功',
                            type: 'success'
                        });
                    });
                };
            });
        },
        handleDelivery () {
            this.$refs.DeliveryForm.validate(v => {
                if (v) {
                    this.dialog.delivery = false;
                    AuthorizeCode.create({name: AuthorizeCode.m.name, projectId: Project.m.id}).then(r => {
                        this.$message({
                            message: '签字成功',
                            type: 'success'
                        });
                    });
                };
            });
        },
        handleAfterSave () {
        },
        handleDialog (row, dialog) {
            this.dialog[dialog] = true;
            Project.m = row;
        },
        handleChange (file, fileList) {
            ProjectSign.m.attatchment = fileList;
        }
    }
};
</script>
