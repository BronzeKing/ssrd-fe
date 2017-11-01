import { IndustryLink, News, SystemCase } from "apis";
import { crashBall } from "components";
export default {
  name: "home",
  components: {
    crashBall
  },
  data() {
    return {
      homeBanners: [
        require("assets/home_banner.png"),
        require("assets/home_banner1.png"),
        require("assets/home_banner2.png")
      ],
      IndustryLink: IndustryLink,
      News: News,
      SystemCase: SystemCase
    };
  },
  created() {
    News.list({ PageSize: 3 });
    IndustryLink.list();
    SystemCase.list({ PageSize: 3 });
  }
};
