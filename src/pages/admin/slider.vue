<template lang="pug">
    .page-slider
        el-menu.el-menu-vertical-demo(:default-active="activeMenu" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :unique-opened="true" :router="true")
            el-submenu(v-for="(menu, index) in sidebar" :key="index" :index="String(index)")
                template(slot="title")
                    i(:class="icons[menu.name]")
                    span(slot="title") {{menu.title}}
                el-menu-item-group(v-for="(item, itemIndex) in menu.sub" :key="itemIndex")
                    el-menu-item(:index="[index, itemIndex].join('-')" :route="{name: item.name}") {{item.title}}
</template>

<script lang="ts" src="./sidebar.ts">
</script>

<style lang="scss">
.page-slider{
    width: 290px;
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        // width: 200px;
        min-height: 400px;
    }
}
  
</style>
