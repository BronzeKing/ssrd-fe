<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ name: 'admin' }") 后台管理
                el-breadcrumb-item {{关于公司}}
        .about-wrap.mt10.p15
            div
                el-form(ref="AboutUsForm" :model="AboutUs.m" :rules="AboutUs.rules" label-width="120px" label-position="right")
                    el-form-item(label="公司简介")
                        el-input(type="textarea" autosize v-model="AboutUs.m.introduction" auto-complete="off" placeholder="请填写公司简介")
                    el-form-item(label="企业文化")
                        el-input(type="textarea" autosize v-model="AboutUs.m.culture" auto-complete="off" placeholder="请填写企业文化")
                    el-form-item(label="公司地址")
                        el-input(autosize v-model="AboutUs.m.address" auto-complete="off" placeholder="请填写公司地址")
                el-button(@click="dialog.aboutUs = false") 取消
                el-button(type="primary" @click="handleAboutUs") 确定

</template>
<script lang="ts">
import { Component, Provide, Vue, Watch } from "vue-property-decorator";
import { AboutUs } from "apis";

@Component
export default class AboutUsView extends Vue {
    @Provide() AboutUs: any = AboutUs;
    @Provide() dialog = { aboutUs: false };
    $refs: {
        AboutUsForm: HTMLFormElement;
    };
    protected created(): void {
        AboutUs.retrieve();
    }
    public get env() {
        return this.$store.state.home.env;
    }
    aboutUsList () {
        AboutUs.retrieve();
    }

    handleUpdate() {
        this.dialog.aboutUs = true;
    }
    handleAboutUs() {
        AboutUs.update().then((r: any) => {
            this.dialog.aboutUs = false;
            this.aboutUsList()
        });
    }
}
</script>
