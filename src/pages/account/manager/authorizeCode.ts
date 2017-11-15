import { Component, Provide, Vue } from "vue-property-decorator";
import { AuthorizeCode } from "apis";
@Component
export default class AuthorizeCodeView extends Vue {
    @Provide()
    statusList = ["-1", "1", "0"].map(x => {
        return {
            value: x,
            label: this.env.status[x] + "授权码"
        };
    });
    @Provide() AuthorizeCode = AuthorizeCode;

    public get env() {
        return this.$store.state.home.env;
    }

    protected created() {
        AuthorizeCode.list();
    }

    authoriazeCodeList() {
        AuthorizeCode.list();
    }
    authorizeCodeDestroy(data: Payload) {
        AuthorizeCode.destroy(data);
        this.authoriazeCodeList();
    }
    authorizeCodeUpdate(data: Payload) {
        AuthorizeCode.update(data);
    }
}
