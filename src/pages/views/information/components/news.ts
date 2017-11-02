import Vue from "vue";
import { News } from "apis";
export default Vue.extend({
  name: "news",
  data() {
    return {
      News: News
    };
  },
  created() {
    News.list();
  },
  methods: {
    rowClick(data: any): void{
    }
  }
});
