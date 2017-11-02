import Vue from "vue";
import { News } from "apis";
export default Vue.extend({
  name: "newsDetail",
  data() {
    return {
      News: News,
    };
  },
  created() {
      News.retrieve({id: this.$route.params.id});
  }
});
