<template lang="pug">
    #app
        transition(name="router-fade" mode="out-in")
            router-view
        
</template>

<script>
import { Env, Login } from 'apis';

export default {
    name: 'app',
    created () {
        this.init();
    },
    methods: {
        init () {
            if (localStorage.token) {
                Login.retrieve().then(r => {
                    this.$store.commit('login', r);
                });
            };
            Env.retrieve().then(r => {
                this.$store.commit('env', r);
            });
        }
    }
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
