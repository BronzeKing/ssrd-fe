<template lang="pug">
    #app
        transition(name="router-fade" mode="out-in")
            router-view
        
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { Env, Login, Profile } from 'src/apis';

@Component
export default class App extends Vue {
};
</script>

<style lang="scss">
    @import 'scss/common.scss';                         // 全局通用样式
    @import '~viewerjs/dist/viewer.min.css';            // 全局通用样式
    
    .router-fade-enter-active,
    .router-fade-leave-active {
        transition: opacity .3s;
    }
    
    .router-fade-enter,
    .router-fade-leave-active {
        opacity: 0;
    }
</style>
