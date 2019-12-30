let days = "天一二三四五六"
let times = ['7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00']
let meeting = [
  // 安排的数组，开始时间和持续时间，标题
  [{
    subject: '秘书处',
    start: 29,
    time: 4,
    pass:true,
  }],
  [
    {
      subject: "团校",
      start: 28,
      time: 4
    }
  ],
  [
    {
      subject: "数学",
      start: 24,
      time: 4,
    },
    {
      subject: "组织部",
      start: 28,
      time: 4,
    }
  ],
  [
    {
      subject: '信息中心',
      start: 19,
      time: 4,
      pass:true,

    },
    {
      subject: '实践部',
      start: 28,
      time: 4,
      pass:false,
    }
  ],
  [
    {
      subject: '文艺部',
      start: 28,
      time: 4,
    }
  ],
  [
    {
      subject: '能动',
      start: 24,
      time: 4,
    },
    {
      subject: '志工部',
      start: 28,
      time: 4,
    },
  ],
  [
    {
      subject: '辩论队',
      start: 24,
      time: 9,
      pass:true,

    },
  ]
]
export {
  days,
  times,
  meeting,
}
