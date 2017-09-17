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
        // 获取合作伙伴
        getDocuments () {
            getDocuments({
                params:{
                    PageIndex: 1,
                    PageSize: 12,
                    source: 1
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
