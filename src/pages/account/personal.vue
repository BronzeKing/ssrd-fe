<template lang="pug">
    .page-secure
        .secure-wrap
            .secure-info
                .user-wrap
                    .user-face
                        img(:src="user.profile.avator")
                    .user-btn.mt10
                        router-link(:to="{name: 'profile'}")
                            span.line 个人资料
                        router-link(:to="{name: 'invitation'}")
                            span 我的收益
                .secure-warp
                    p.mb10 账户安全：
                    p.mb10(v-if="user.mobile") 绑定手机：{{user.mobile}}
                    p.mb10(v-if="!user.mobile") 绑定手机：尚未绑定手机
                    p.mb10(v-if="user.email") 绑定邮箱：{{user.email}}
                    p.mb10(v-if="!user.email") 绑定邮箱：尚未绑定邮箱
                    
            
        .survey-wrap
            el-tabs(v-model="activeName" @tab-click="handleClick")
                el-tab-pane(v-for="(item, index) in Project.t.Records.slice(0,3)" :label="item.name" :name="String(index)" :key="index") {{item.name}}
        .project-wrap
            .tab-list
                .left-list
                    .tab-item(v-for="(item, index) in statusList" :key="index" :class='{active: Project.t.status === item}') {{item}}
                router-link(:to="{name: 'project'}")
                    .tab-item.fr  查看全部项目
            project-table.personal-project-table(:show="{search: false, pagination: false}")
</template>
<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import { projectTable } from 'components';
import { Project } from 'apis';
@Component
({
    components:{
        projectTable
    }
})
export default class Personal extends Vue
{
    @Provide() activeName = 0;
    @Provide() Project = Project;
    @Provide() statusList = ['全部项目', '跟进中', '维护中', '沟通中', '已完成'];
    @Provide() tableData: Array<any> = [
        {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }];

    public get user() {
        return this.$store.state.user.user;
    }
    public handleClick(): void{

    }
}
</script>
<style lang="scss">
.page-secure{
    .personal-project-table{
        .cell{
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }
    }
    .secure-wrap{
        // width: 870px;
        background: #fff;
        padding: 15px;
        .secure-info{
            display: flex;
            .user-face{
                width: 115px;
                height: 115px;
                border-radius: 50%;
                overflow: hidden;
                border: 1px solid #ccc;
                img{
                    width: 100%;
                }
            }
            .user-btn{
                .line{
                    padding-right: 10px;
                    border-right: 1px solid #000;
                    margin-right: 10px;
                }
            }
            .secure-warp{
                border-right: 1px solid #ccc;
                padding: 10px 20px 0;
            }
        }
            
    }
    .survey-wrap{
        background-color: #fff;
        margin-top: 20px;
        padding: 15px;
    }
    .project-wrap{
        background-color: #fff;
        margin-top: 20px;
        padding: 15px;
        .tab-list{
            display: flex;
            align-items: center;
            justify-content: space-between;
            .left-list{
                display: flex;
            }
            .tab-item{
                margin-left: 10px;
                padding: 3px 8px;
                border-radius: 5px;
                &.active{
                    color: #fff;
                    background: #0187D0;
                }
                &:hover{
                    color: #fff;
                    background: #0187D0;
                    cursor: pointer;
                }
            }
        }
    }
}

</style>
