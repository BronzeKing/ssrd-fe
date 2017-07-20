<template>
    <div class="home">
        我是home页面,{{data}}
    </div>
</template>
<script>
    export default {
        name: 'home',
        data () {
            return  {
                data: 'Hello,World.'
            };
        }
    };
</script>
