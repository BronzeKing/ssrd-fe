<template lang="pug">
    .page-header
        el-menu.el-menu-vertical-demo(default-active="" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :unique-opened="true" :router="true")
            el-submenu(v-for="(menu, index) in sidebar" :key="index" :index="String(index)")
                template(slot="title")
                    i.el-icon-message
                    span(slot="title") {{menu.title}}
                el-menu-item-group(v-for="(item, itemIndex) in menu.sub" :key="itemIndex")
                    el-menu-item(:index="[index, itemIndex].join('-')" :route="{name: item.name}") {{item.title}}
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import { SIDEBAR } from './sidebar';

@Component
export default class Header extends Vue
{
    @Provide() sidebar = SIDEBAR;
    @Provide() isCollapse = false;
    handleOpen (key: string, keyPath: string) {
    }
    handleClose (key: string, keyPath: string) {
    }
};
</script>

<style lang="scss" scoped>
.page-header{
    width: 290px;
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
}
  
</style>
