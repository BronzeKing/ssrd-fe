<template>
    <div class="home">
        我是login页面,{{data}}
    </div>
</template>
<script>
    export default {
        name: 'login',
        data () {
            return  {
                data: 'Hello, login.'
            };
        }
    };
</script>
<style lang="scss">
    @import "~scss/pages/home";
</style>