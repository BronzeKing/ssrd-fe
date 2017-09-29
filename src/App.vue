<template lang="pug">
    #app
        transition(name="router-fade" mode="out-in")
            router-view
        crash-ball
</template>

<script>
    import { crashBall } from 'components';
    export default {
        name: 'app',
        components: {
            crashBall
        }
    };
</script>

<style lang="scss">
    @import 'scss/common.scss';                         // 全局通用样式
    
    .router-fade-enter-active,
    .router-fade-leave-active {
        transition: opacity .3s;
    }
    
    .router-fade-enter,
    .router-fade-leave-active {
        opacity: 0;
    }
</style>
