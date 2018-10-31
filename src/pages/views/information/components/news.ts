import { Component, Provide, Vue } from 'vue-property-decorator';
import { News } from "src/apis";

@Component
export default class NewsView extends Vue
{
    @Provide() News = News;
    protected created(): void {
        News.list();
    }
    rowClick(data: any) {
        this.$router.replace({
            name: "newsDetail",
            params: { id: data.id }
        });
    }
};
