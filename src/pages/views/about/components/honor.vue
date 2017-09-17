<template lang="pug">
    
</template>
<script>
import  { getDocuments } from 'apis';
export default{
    name: '',
    data () {
        return {
            data: 'Hello,World.'
        };
    },
    created () {
        this.getDocuments();
    },
    methods: {
        // 获取荣誉资质
        getDocuments () {
            getDocuments({
                params:{
                    PageIndex: 1,
                    PageSize: 12,
                    source: 0
                }
            }).then(res => {
                /* eslint-disable */
                console.log('homeres', res);
                /* eslint-enable */
            });
        }
    }
};
</script>