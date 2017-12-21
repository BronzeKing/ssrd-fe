import { Component, Provide, Vue } from "vue-property-decorator";
import { Captcha, Password, Email, Credential } from "apis";

@Component
export default class Secure extends Vue {
    @Provide() passDialog = false;
    @Provide() dialog = { mobile: false };
    @Provide() activeName = "1";
    @Provide() changeEmailDialog = false;
    @Provide() Password = Password;
    @Provide() Captcha = Captcha;
    @Provide() Email = Email;
    @Provide()
    $refs: {
        changeEmailForm: HTMLFormElement;
        passForm: HTMLFormElement;
        changeMobileForm: HTMLFormElement;
    };

    public get user() {
        return this.$store.state.user.user;
    }
    protected created() {}

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
    changeMobile() {
        this.$refs.changeMobileForm.validate((valid: Boolean) => {
            if (valid) {
                Credential.create(Email.m.serialize()).then((r: Payload) => {
                    this.dialog.mobile = false;
                    this.$message({
                        message: "验证成功",
                        type: "success"
                    });
                });
            }
        });
        Email.errors = Credential.errors;
    }
    changeEmail() {
        this.$refs.changeEmailForm.validate((valid: Boolean) => {
            if (valid) {
                Credential.create(Email.m.serialize()).then((r: Payload) => {
                    this.changeEmailDialog = false;
                    this.$message({
                        message: "验证成功",
                        type: "success"
                    });
                });
            }
        });
        Email.errors = Credential.errors;
    }
    /**
  * 获取验证码
  *
  * @param type email: 更改邮箱的时候传email， 更改手机的时传mobile
  */
    sendCaptcha(type: string): void {
        let payload = {};
        if (type === "email") {
            payload = { email: Email.m.email, action: "changeEmail" };
        } else {
            payload = { mobile: Email.m.mobile, action: "changeMobile" };
        }
        Captcha.retrieve(payload).then((r: Payload) => {
            this.$message({
                message: "校验码已发出，请注意查收",
                type: "success"
            });
        });
        Email.errors = Captcha.errors;
    }
    handleClick() {}
}
