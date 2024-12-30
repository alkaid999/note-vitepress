import { defineConfig } from 'vitepress'
// 导入导航栏和侧边栏
import { nav } from './config/nav.mts'
import { sidebar } from './config/sidebar.mts'
//导入 mermiad 插件
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid({
  title: "My Awesome Project",
  description: "A VitePress Site",
  markdown: {
    lineNumbers: true,  //行号显示
    // 字数及阅读时间组件插入h1标题下
    config: (md) => {
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
        let htmlResult = slf.renderToken(tokens, idx, options);
        if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`;
        return htmlResult;
      }
    }
  },
  //mermaid配置
  mermaid: {
  },

  // Mermaid 插件配置
  mermaidPlugin: {
    class: "mermaid my-class", // 为父容器设置额外的 CSS 类
  },
  themeConfig: {
    // 导航栏
    nav,
    // 侧边栏
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
