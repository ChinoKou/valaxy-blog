import type { UserThemeConfig } from "valaxy-theme-yun";
import { defineValaxyConfig } from "valaxy";

// add icons what you will need
const safelist = ["i-ri-home-line"];

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: "yun",

  themeConfig: {
    banner: {
      enable: true,
      title: "ChinoKou的小站",
    },

    fireworks: {
      enable: true,
      colors: ["#66CCFF", "#FECCFF", "#FFFFFF"],
    },

    pages: [
      // {
      //   name: '我的小伙伴们',
      //   url: '/links/',
      //   icon: 'i-ri-genderless-line',
      //   color: 'dodgerblue',
      // },
      // {
      //   name: '喜欢的女孩子',
      //   url: '/girls/',
      //   icon: 'i-ri-women-line',
      //   color: 'hotpink',
      // },
    ],

    footer: {
      since: 2025,
      cloud: {
        enable: true,
      },
      powered: false,
      icon: {
        enable: false,
      },
      beian: {
        enable: false,
        icp: "",
        police: "",
      },
    },
  },

  addons: [],

  unocss: { safelist },
});
