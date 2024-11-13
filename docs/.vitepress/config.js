import { readAllFiles } from "../utils";
import { leetcodePath, studyPath, vuePath, webpackPath, hot100 } from "../contant" 

module.exports = {
  title: "前端小文", // 网站标题
  description: "leetcode share.", //网站描述
  //   base: "/", //  部署时的路径 默认 /  可以使用二级地址 /base/
  base: '/vitePress/', // 在这里我与部署的站点一致 https://lgowen.github.io/vitePress 就不根据环境区分了
  // lang: 'en-US', //语言
  // 网页头部配置，引入需要图标，css，js
  head: [
    // 改变title的图标
    [
      "link",
      {
        rel: "icon",
        href: "/vitePress/lake.jpg", //图片应该放在根目录底下的public文件夹内 踩坑半天拿不到图片
        // 如果你的站点部署在非根URL，你需要在 .vitepress/config.js中设置base选项。例如，如果你计划部署你的站点到https://foo.github.io/bar/，base选项就应该设置为'/bar/'(始终以/开始和结尾)。
      },
    ],
  ],
  // 主题配置
  themeConfig: {
    repo: "Lgowen", // 你的 github 仓库地址，网页的右上角会跳转
    // 头部导航
    nav: [
      { text: "前端基础", link: "leetcode/day1" },
      { text: "日常学习", link: "study/day1" },
      { text: 'vue', link: "vue/v-model"},
      { text: 'webpack', link: "webpack/demo"},
      { text: 'hot100', link: "hot100/day1"}
    ],
    // 侧边栏
    sidebar: {
      "/leetcode/": readAllFiles(leetcodePath, true),
      "/study/": readAllFiles(studyPath),
      "/vue/": readAllFiles(vuePath),
      "webpack": readAllFiles(webpackPath),
      "hot100":  readAllFiles(hot100)
    },
  },
};
