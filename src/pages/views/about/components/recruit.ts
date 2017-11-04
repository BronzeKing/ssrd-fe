import { Component, Provide, Vue } from "vue-property-decorator";
import { Recruitment, Job } from "apis";

@Component
export default class Recruit extends Vue
{
  @Provide() activeType: string = "index";
  @Provide() dialogFormVisible: Boolean = false;
  @Provide() loading: Boolean = false;
  @Provide() Job: any = Job;
  @Provide() Recruitment: any = Recruitment;
  $refs: {
    jobForm: HTMLFormElement
  }

  protected created(): void
  {
    Recruitment.list();
  }
  handleCurrentChange(data: any) {
    this.activeType = "detail";
    this.Recruitment.m = data;
  }
  dialogShow() {
    this.dialogFormVisible = true;
    Job.m.populate({
      job: this.Recruitment.m.name
    });
  }
  dialogClose() {
    this.dialogFormVisible = false;
  }
  uploadFile(e: any) {
    let files = e.target.files || e.dataTransfer.files;
    if (files.length) {
      Job.m.populate({attatchment: files[0]});
    }
  }
  submit() {
    this.$refs.jobForm.validate((valid: Boolean) => {
      if (valid) {
        Job.create()
          .then((r: any) => {
            this.$message({
              message: "提交成功！",
              type: "success"
            });
            this.loading = false;
            this.dialogClose();
          })
          .catch((err: any) => {
            this.$message.error("提交失败！");
            this.loading = false;
            console.log(err);
          });
      } else {
        return false;
      }
    });
  }
}
