import { Component, Provide, Vue } from 'vue-property-decorator';
import { System } from 'apis';
@Component
export default class ProjectCreateView extends Vue
{
    @Provide() System = System;
    protected created () {
        System.list();
    }
};