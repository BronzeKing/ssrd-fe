<template>
    <div id="app">
        <img class="app-logo" src="./assets/logo.png">
        <transition name="router-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'app'
    };
</script>

<style lang="scss">
    @import 'scss/common.scss'; // 全局通用样式

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: .5rem;
    }
    
    .app-logo{
        width: 2rem;
        height: 2rem;
    }
    
    .router-fade-enter-active,
    .router-fade-leave-active {
        transition: opacity .3s;
    }
    
    .router-fade-enter,
    .router-fade-leave-active {
        opacity: 0;
    }
</style>
