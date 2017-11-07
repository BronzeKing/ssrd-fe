<template lang="pug">
    .container
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
<style lang="scss" scoped>
.container{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

</style>
