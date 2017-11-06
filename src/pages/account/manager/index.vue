<template lang="pug">
    .views
        slider
        router-view
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
import Slider from '../slider.vue';
@Component
({
    components:{
        Slider
    }
})
export default class Manager extends Vue
{
};
</script>
