import { Component, Provide, Vue } from 'vue-property-decorator';
import { News } from "apis";

@Component
export default class NewsDetail extends Vue
{
  @Provide() News = News;
  protected created() {
    News.retrieve({id: this.$route.params.id});
  }
};
