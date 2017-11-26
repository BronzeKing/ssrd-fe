<template lang="pug">
    div
        .breadcrumb
            el-breadcrumb
                el-breadcrumb-item(:to="{ name: 'account' }") 个人中心
                el-breadcrumb-item(:to="{ name: 'manager' }") 管理中心
                el-breadcrumb-item 个人资料
        div
            el-form(ref="form" :model="Profile" label-width="80px")
                el-form-item(label="真实姓名")
                    el-input(v-model="Profile.m.name" :placeholder="Profile.m.name")
                el-form-item(label="性别")
                    el-radio-group(v-model="Profile.m.gender")
                        el-radio(label="男" value="male")
                        el-radio(label="女" value="female")
                el-form-item(label="出生日期")
                    el-col(:span="11")
                        el-date-picker(type="date" placeholder="选择日期" v-model="Profile.m.birthday" style="width: 100%;")
                el-form-item(label="所属公司")
                    el-input(v-model="Profile.m.company" :placeholder="Profile.m.company")
                el-form-item(label="职位")
                    el-input(v-model="Profile.m.position" :placeholder="Profile.m.position")
                el-form-item(label="地址")
                    el-input(v-model="Profile.m.address" :placeholder="Profile.m.address")
                el-button(type="primary" @click="submit") 保存
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import  { Profile } from 'apis';
@Component
export default class ProfileView extends Vue
{
    @Provide() Profile = Profile;
    public created () {
    }
    submit () {
        Profile.update();
    }
};
</script>
