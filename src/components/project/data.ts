export const data = {
  audit: {
    errors: {
      content: ""
    },
    rules: {
      content: [
        {
          required: true,
          message: "请填写审核意见",
          trigger: "blur"
        }
      ]
    },
    data: {
      content: ""
    }
  },
  assist: {
    errors: {
      content: ""
    },
    rules: {
      content: [
        {
          required: true,
          message: "请填写审核意见",
          trigger: "blur"
        }
      ]
    },
    data: {
      content: ""
    }
  },
  jobJournal: {
    errors: {
      content: "",
      date: ""
    },
    rules: {
      date: [
        {
          required: true,
          message: "请选择工作日期",
          trigger: "blur"
        }
      ],
      content: [
        {
          required: true,
          message: "请填写审核意见",
          trigger: "blur"
        }
      ]
    },
    data: {
      content: "",
      type: [],
      date: new Date(),
      attatchment: [],
      options: [
        {
          value: "enterInto",
          label: "进场照片",
          children: [
            {
              value: "admission",
              label: "进场凭证"
            },
            {
              value: "implement",
              label: "施工凭证"
            },
            {
              value: "complete",
              label: "竣工凭证"
            },
            {
              value: "checked",
              label: "验收凭证"
            },
            {
              value: "other",
              label: "其他"
            }
          ]
        },
        {
          value: "leave",
          label: "离场照片",
          children: [
            {
              value: "admission",
              label: "进场凭证"
            },
            {
              value: "implement",
              label: "施工凭证"
            },
            {
              value: "complete",
              label: "竣工凭证"
            },
            {
              value: "checked",
              label: "验收凭证"
            },
            {
              value: "other",
              label: "其他"
            }
          ]
        }
      ]
    }
  },
  design: {
    errors: {
      attatchment: "",
      price: ""
    },
    rules: {
      price: [
        {
          required: true,
          message: "请填写报价",
          trigger: "blur"
        }
      ],
      attatchment: [
        {
          required: true,
          message: "请上传设计文件",
          trigger: "blur"
        }
      ]
    },
    data: {
      price: "",
      attatchment: []
    }
  },
  delivery: {
    errors: {
      attatchment: "",
      number: ""
    },
    rules: {
      number: [
        {
          required: true,
          message: "请填写缺货项",
          trigger: "blur"
        }
      ],
      attatchment: [
        {
          required: true,
          message: "请上传缺货清单",
          trigger: "blur"
        }
      ]
    },
    data: {
      number: "",
      attatchment: []
    }
  }
};
