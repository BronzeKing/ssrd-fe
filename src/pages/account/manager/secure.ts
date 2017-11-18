import { Component, Provide, Vue } from "vue-property-decorator";
import { Captcha, Password, Email } from "apis";

@Component
export default class Secure extends Vue {
    @Provide() passDialog = false;

    @Provide() changeEmailDialog = false;
    @Provide() Password = Password;
    @Provide() Captcha = Captcha;
    @Provide() Email = Email;
    @Provide() user = this.$store.state.user.user;
    @Provide()
    $refs: {
        changeEmailForm: HTMLFormElement;
        passForm: HTMLFormElement;
    };

    changePassword() {
        this.$refs.passForm.validate((valid: Boolean) => {
            if (valid) {
                this.passDialog = false;
                Password.create().then((r: Payload) => {
                    this.$message({
                        message: "更改成功",
                        type: "success"
                    });
                });
            }
        });
    }
    changeEmail() {
        this.$refs.changeEmailForm.validate((valid: Boolean) => {
            if (valid) {
                this.changeEmailDialog = false;
                Email.create().then((r: Payload) => {
                    this.$message({
                        message: "发送成功",
                        type: "success"
                    });
                });
            }
        });
    }
    sendCaptcha(type: string, credential: string): void {
        Captcha.retrieve({
            Type: type,
            credential: credential,
            action: "resetPassword"
        }).then((r: Payload) => {
            this.$message({
                message: "更改成功",
                type: "success"
            });
        });
    }
}
