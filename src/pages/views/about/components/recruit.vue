<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item 首页
                el-breadcrumb-item 关于我们
                el-breadcrumb-item 招贤纳士
        .about-wrap.mt10
            div(v-show="activeType==='index'")
                el-input(placeholder="职位搜索" icon="search" v-model="inputValue" :on-icon-click="getInfo")
                el-table.mt10(:data="tableData" highlight-current-row @current-change="handleCurrentChange" style="width: 100%")
                    el-table-column(property="name" label="职位名称")
                    el-table-column(property="address" label="工作地点")
                    el-table-column(property="created" label="发布时间")
                        template(scope="scope") {{scope.row.updated | dateFilter(1)}}
                el-pagination.mt5(@current-change="getInfo" :page-size="pageSize" layout="prev, pager, next, jumper" :total="pageSize" :current-page.sync="pageIndex")
            div.detail-container(v-show="activeType==='detail'")
                span.f16 {{detailData.name}}
                span.f14.ml30 工作地点：{{detailData.address}}
                span.f14.ml30 招聘人数：{{detailData.number}}人
                p.f14.mt20 任职要求：
                .line.mt10 
                p.mt10 {{detailData.jobDetail}}
                el-button.mt10(type="primary" @click="applyFor") 申请职位
        el-dialog(title="职位申请" :visible.sync="dialogFormVisible")
            el-form(:model="form" :label-position="right" label-width="80px")
                el-form-item(label="职位" )
                    el-input(v-model="detailData.name" auto-complete="off")
                el-form-item(label="姓名")
                    el-input(v-model="detailData.name" auto-complete="off")
                el-form-item(label="电话")
                    el-input(v-model="detailData.name" auto-complete="off")
                el-form-item(label="邮箱")
                    el-input(v-model="detailData.name" auto-complete="off")
                el-form-item(label="附件")
                    input(type="file" name="file" @change="uploadFile") 
                el-form-item
                    el-button(type="primary" @click="submit") 提交
                    el-button(@click="submit") 取消



</template>
<script>
import  { recruitments } from 'apis';
import  { dateFilter } from 'filters';
export default {
    name: 'recruit',
    data () {
        return  {
            inputValue: '',
            pageIndex:1,
            pageSize:10,
            total:0,
            tableData:[],
            activeType:'index',
            detailData:{name:123},
            dialogFormVisible: true,
            formData:null
        };
    },
    created () {
        // 获取新闻内容咯
        this.getInfo();
    },
    methods: {
        // 获取招聘
        getInfo () {
            recruitments({
                params:{
                    PageIndex: this.pageIndex,
                    PageSize: this.pageSize,
                    search: this.inputValue
                }
            }).then(res => {
                /* eslint-disable */
                console.log('homeres', res);
                this.total = res.RecordCount
                this.tableData = res.Records
                /* eslint-enable */
            });
        },
        handleCurrentChange (data) {
            this.activeType = 'detail';
            this.detailData = data;
            // console.log('1111', data);
        },
        applyFor () {

        },
        uploadFile (e) {
            var files = e.target.files || e.dataTransfer.files;
            if (files.length) {
                var formData = new FormData();
                formData.append('attatchment', files[0]);
                this.formData = formData;
            }
        },
        submit () {

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

