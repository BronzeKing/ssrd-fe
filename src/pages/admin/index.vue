<template lang="pug">
    router-view
</template>

<script lang="ts">
/*
* 后台管理页面首页
*/
import { Component, Provide, Vue } from 'vue-property-decorator';
@Component
export default class AdminView extends Vue
{
};

</script>
<style lang="scss">
.page-usercenter{
    background-color: #f1f1f1;
    .container{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }

    // 面包屑导航部分
    .breadcrumb{
        padding: 15px 0;
    }

    .page-right{
        width: 870px;
        background: #fff;
        padding: 15px;
        .secure-item{
            display: flex;
            align-items: center;
            .state-icon{
                width: 50px;
            }
            .item-info{
                width: 500px;
                margin-left: 20px;
            }
        }
    }
}
</style>
