import { Watch, Component, Provide, Vue } from "vue-property-decorator";
import { News } from "src/apis";

@Component
export default class NewsDetail extends Vue {
    @Provide() News = News;

    protected created() {
        this.init();
    }
    @Watch("$route")
    onRouteChange() {
        this.init();
    }
    init() {
        News.retrieve({ id: this.$route.params.id });
    }
}
