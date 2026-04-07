import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: "https://chinokou.cn/",
  lang: "zh-CN",
  title: "ChinoKou的小站",
  subtitle: "",
  favicon: "/favicon.ico",
  author: {
    name: "ChinoKou",
    avatar: "/avatar.jpg",
    status: {
      emoji: "",
    },
  },
  timezone: "Asia/Shanghai",
  description: "",
  statistics: {
    enable: true,
    readTime: {
      speed: {
        cn: 300,
        en: 200,
      },
    },
  },
  social: [
    {
      name: "GitHub",
      link: "https://github.com/ChinoKou",
      icon: "i-ri-github-line",
      color: "#6e5494",
    },
    {
      name: "网易云音乐",
      link: "https://music.163.com/#/user/home?id=1948840351",
      icon: "i-ri-netease-cloud-music-line",
      color: "#C20C0C",
    },
    {
      name: "哔哩哔哩",
      link: "https://space.bilibili.com/357206905",
      icon: "i-ri-bilibili-line",
      color: "#FF8EB3",
    },
    {
      name: "E-Mail",
      link: "mailto:me@ChinoKou@outlook.com",
      icon: "i-ri-mail-line",
      color: "#8E71C1",
    },
  ],

  search: {
    enable: true,
  },

  sponsor: {
    enable: false,
    title: "我很可爱，请给我钱！",
    methods: [
      {
        name: "支付宝",
        url: "",
        color: "#00A3EE",
        icon: "i-ri-alipay-line",
      },
      {
        name: "QQ 支付",
        url: "",
        color: "#12B7F5",
        icon: "i-ri-qq-line",
      },
      {
        name: "微信支付",
        url: "",
        color: "#2DC100",
        icon: "i-ri-wechat-pay-line",
      },
    ],
  },
});
