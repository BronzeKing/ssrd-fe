import { Watch, Component, Provide, Vue } from "vue-property-decorator";
import { News } from "apis";

@Component
export default class NewsDetail extends Vue {
  @Provide() News = News;
  @Watch("$route")
  onRouteChange() {
    News.retrieve({ id: this.$route.params.id });
  }
}
