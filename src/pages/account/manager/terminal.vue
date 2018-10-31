<template lang="pug">
    div.project-create
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ path: '/' }") 首页
                el-breadcrumb-item(:to="{ name: 'account' }") 管理中心
                el-breadcrumb-item 远程终端访问平台
        div
            el-row(:gutter="20")
                el-col(:span="8" class="project-create-item mb20" v-for="(item, index) in Terminal.t.Records" :key="index")
                    a(:href="item.link")
                        el-card(:body-style="{ padding: '0px' }")
                            div.project-create-image(:style="{backgroundImage: `url(${item.picture})`}")
                            div(style="padding: 14px;")
                                span {{item.name}}

</template>
<script lang="ts">
// 远程终端访问平台
import { Component, Provide, Vue } from 'vue-property-decorator';
import  { Terminal } from 'src/apis';
@Component
export default class TerminalView extends Vue
{
    @Provide() Terminal = Terminal;
    protected created () {
        Terminal.list();
    }
};
</script>

<style lang="scss">

.project-create{
    // 项目图标。
    .project-create-image{
        min-height: 204px;
        background-size: 40%;
        background-position: center center;
        background-repeat: no-repeat;
        // width: 100%;
        // display: block;
    }
    .time {
        font-size: 13px;
        color: #999;
    }
    
    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    // .image {
    //     width: 100%;
    //     display: block;
    // }
}
</style>
