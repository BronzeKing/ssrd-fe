<template lang="pug">
    .views
        page-header
        router-view
</template>

<script>
import pageHeader from './header';
export default {
    name: 'account',
    components: {
        pageHeader
    }
};
</script>
