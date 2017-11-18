import { Component, Provide, Vue } from "vue-property-decorator";
import { Captcha, Password, Email, Credential } from "apis";

@Component
export default class Secure extends Vue {
    @Provide() passDialog = false;
    @Provide() activeName = "1";
    @Provide() changeEmailDialog = false;
    @Provide() Password = Password;
    @Provide() Captcha = Captcha;
    @Provide() Email = Email;
    @Provide()
    $refs: {
        changeEmailForm: HTMLFormElement;
        passForm: HTMLFormElement;
    };

    public get user() {
        return this.$store.state.user.user;
    }

    changePassword() {
        this.$refs.passForm.validate((valid: Boolean) => {
            if (valid) {
                Password.create().then((r: Payload) => {
                    if (!r.errors) {
                        this.passDialog = false;
                        this.$message({
                            message: "更改成功",
                            type: "success"
                        });
                    }
                });
            }
        });
    }
    changeEmail() {
        this.$refs.changeEmailForm.validate((valid: Boolean) => {
            if (valid) {
                this.changeEmailDialog = false;
                Credential.create(Email.m.serialize()).then((r: Payload) => {
                    this.$message({
                        message: "发送成功",
                        type: "success"
                    });
                });
            }
        });
    }
    /**
  * 获取验证码
  *
  * @param type email: 更改邮箱的时候传email， 更改手机的时传mobile
  */
    sendCaptcha(type: string): void {
        let credential: string, form: HTMLFormElement, action: string;
        if (type === "email") {
            form = this.$refs.changeEmailForm;
            credential = Email.m.email;
            action = "changeEmail";
        } else {
            form = this.$refs.changeEmailForm;
            credential = Email.m.email;
            action = "changeEmail";
        }
        Captcha.retrieve({
            Type: type,
            credential: credential,
            action: action
        }).then((r: Payload) => {
            this.$message({
                message: "校验码已发出，请注意查收邮箱",
                type: "success"
            });
        });
        Email.errors = Captcha.errors;
    }
    handleClick() {}
}
