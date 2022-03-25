import { getVueMenuBar } from "./menu";
import { readAllFiles } from "../utils";

module.exports = {
  title: "用算法娱乐身心", // 网站标题
  description: "leetcode share.", //网站描述
  //   base: "/", //  部署时的路径 默认 /  可以使用二级地址 /base/
  base: '/vitePress/',
  // lang: 'en-US', //语言
  // 网页头部配置，引入需要图标，css，js
  head: [
    // 改变title的图标
    [
      "link",
      {
        rel: "icon",
        href: "/lake.jpg", //图片放在img文件夹下
      },
    ],
  ],
  // 主题配置
  themeConfig: {
    repo: "Lgowen", // 你的 github 仓库地址，网页的右上角会跳转
    // 头部导航
    nav: [
      { text: "剑指offer", link: "leetcode/day1" },
      { text: "日常学习", link: "study/day1" },
    ],
    // 侧边栏
    sidebar: {
      "/leetcode/": readAllFiles(),
      "/study/": getVueMenuBar(),
    },
  },
};
