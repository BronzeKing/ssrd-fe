import Vue from "vue";
import * as api from "apis";

export default Vue.extend({
    name: "news",
    data() {
        return {
            News: api.News
        };
    },
    created() {
        api.News.list();
    },
    methods: {
        rowClick(data: any) {
            this.$router.replace({
                name: "newsDetail",
                params: { id: data.id }
            });
        }
    }
});
