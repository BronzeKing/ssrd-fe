<template lang="pug">
    #app
        transition(name="router-fade" mode="out-in")
            router-view
        
</template>

<script lang="ts">
import { Component, Provide, Vue } from "vue-property-decorator";
import { Env, Login, Profile } from 'apis';

@Component
export default class App extends Vue {
    protected created () {
        this.init();
    }
    init () {
        if (localStorage.token) {
            Login.retrieve().then((r: Payload) => {
                // 如果返回url的话 说明需要重定向 登录不成功
                if (r.url) {
                    this.$store.commit('logout');
                } else {
                    this.$store.commit('login', r);
                }
                Profile.retrieve({userId: r.id});
            });
        } else {
            this.$store.commit('logout');

        }
        Env.retrieve().then((r: Payload) => {
            this.$store.commit('env', r);
        });
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
