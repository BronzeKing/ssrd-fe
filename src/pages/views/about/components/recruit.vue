<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ path: '/about' }") 关于我们
                el-breadcrumb-item 招贤纳士
        .about-wrap.mt10
            div(v-show="activeType==='index'")
                el-input(placeholder="职位搜索" icon="search" v-model="Recruitment.t.search" :on-icon-click="Recruitment.list" @keyup.enter.native="Recruitment.list")
                el-table.mt10(:data="Recruitment.t.Records" highlight-current-row @current-change="handleCurrentChange" style="width: 100%")
                    el-table-column(property="name" label="职位名称")
                    el-table-column(property="address" label="工作地点")
                    el-table-column(property="created" label="发布时间")
                        template(scope="scope") {{scope.row.updated | dateFilter(1)}}
                el-pagination.mt5(@current-change="Recruitment.list" :page-size="Recruitment.t.pageSize" layout="prev, pager, next, jumper" :total="Recruitment.t.PageCount" :current-page.sync="Recruitment.t.pageIndex")
            div.detail-container(v-show="activeType==='detail'")
                span.f16 {{Recruitment.m.name}}
                span.f14.ml30 工作地点：{{Recruitment.m.address}}
                span.f14.ml30 薪资待遇：{{Recruitment.m.salary}}
                span.f14.ml30 招聘人数：{{Recruitment.m.number}}
                p.f14.mt20 岗位职责:
                .line.mt10 
                p.mt10(v-html="dealWrap(Recruitment.m.jobResponsibilities)")
                p.f14.mt20 任职要求：
                .line.mt10 
                p.mt10(v-html="dealWrap(Recruitment.m.jobDetail)")
                el-button.mt10(type="primary" @click="dialogShow") 申请职位
        el-dialog(title="职位申请" :visible.sync="dialogFormVisible" )
            el-form(:model="Job.m" ref="jobForm" :rules="Job.rules" label-position="right" label-width="80px" v-loading="loading" element-loading-text="正在上传中...")
                el-form-item(label="职位" prop="job" :error="Job.errors.job")
                    el-input(v-model="Job.m.job" auto-complete="off" disabled)
                el-form-item(label="姓名" prop="name" :error="Job.errors.name")
                    el-input(v-model="Job.m.name" auto-complete="off")
                el-form-item(label="电话" prop="mobile" :error="Job.errors.mobile")
                    el-input(v-model="Job.m.mobile" auto-complete="off")
                el-form-item(label="邮箱" prop="email" :error="Job.errors.email")
                    el-input(v-model="Job.m.email" auto-complete="off")
                el-form-item(label="附件" prop="attatchment" :error="Job.errors.attatchment")
                    input(type="file" name="file" @change="uploadFile") 
                el-form-item
                    el-button(type="primary" @click="submit") 提交
                    el-button(@click="dialogClose") 取消
</template>

<script>
import  { Recruitment, Job } from 'apis';
import  { dateFilter } from 'filters';
export default {
    name: 'recruit',
    data () {
        return  {
            activeType:'index',
            dialogFormVisible: false,
            loading:false,
            Job: Job,
            Recruitment: Recruitment
        };
    },
    created () {
        Recruitment.list();
    },
    methods: {
        handleCurrentChange (data) {
            this.activeType = 'detail';
            this.Recruitment.m = data;
        },
        dialogShow () {
            this.dialogFormVisible = true;
            this.Job.reset({
                job: this.Recruitment.m.name
            });
        },
        dialogClose () {
            this.dialogFormVisible = false;
        },
        uploadFile (e) {
            var files = e.target.files || e.dataTransfer.files;
            if (files.length) {
                this.Job.m.attatchment = files[0];
            }
        },
        submit () {
            let _this = this;
            this.$refs.jobForm.validate((valid) => {
                if (valid) {
                    Job.create().then(res => {
                        this.$message({
                            message: '提交成功！',
                            type: 'success'
                        });
                        this.loading = false;
                        this.dialogClose();
                    }).catch(err => {
                        _this.$message.error('提交失败！');
                        _this.loading = false;
                        /* eslint-disable */
                        console.log(err);
                        /* eslint-enable */
                    });
                } else {
                    return false;
                }
            });
        }
    }
};
</script>
<style lang="scss">
    .detail-container{
        background: #fff;
        padding: 15px;
        .line{
            border-top: 1px solid #dddddd;

        }
    }
</style>

