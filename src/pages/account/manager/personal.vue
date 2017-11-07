<template lang="pug">
    .page-secure
        .secure-wrap
            .secure-info
                .user-wrap
                    .user-face
                        img(src="http://static.fallchat.com/dist/timg.jpg")
                    .user-btn.mt10
                        span.line 个人资料
                        span 我的收益
                .secure-warp
                    p.mb10 账户安全：
                    p.mb10 绑定手机：158451564849
                    p.mb10 绑定邮箱：asd@esda.com
                    
            
        .survey-wrap
            el-tabs(v-model="activeName" @tab-click="handleClick")
                el-tab-pane(label="项目一" name="1") 123123123
                el-tab-pane(label="项目二" name="2") 567567
                el-tab-pane(label="项目三" name="3") asdfasdfasdf
        .project-wrap
            .tab-list
                .left-list
                    span.f18 全部项目
                    .tab-item.active  跟进中
                    .tab-item  维护中
                    .tab-item  沟通中
                    .tab-item  已完成
                .tab-item.fr  查看全部项目
            el-table(:data="tableData" style="width: 100%")
                el-table-column(prop="date" label="项目部")
                el-table-column(prop="date" label="名称")
                el-table-column(prop="date" label="项目动态")
                el-table-column(prop="date" label="状态")
                el-table-column(prop="date" label="操作")
</template>
<script lang="ts" src="./secure.ts">
</script>
<style lang="scss">
.page-secure{
    .secure-wrap{
        width: 870px;
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