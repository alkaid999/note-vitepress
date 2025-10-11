import { defineConfig } from 'vitepress'
// 导入导航栏和侧边栏
import { nav } from './config/nav.mts'
import { sidebar } from './config/sidebar.mts'
//导入 mermiad 插件
import { withMermaid } from "vitepress-plugin-mermaid";
//导入时间轴插件
import timeline from "vitepress-markdown-timeline";

export default withMermaid({
  title: "NOTE",
  description: "notes",
  lang: 'zh-CH',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  // markdown 配置
  markdown: {
    lineNumbers: true,  //行号显示
    config: (md) => {
      // 字数及阅读时间组件插入h1标题下 
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
        let htmlResult = slf.renderToken(tokens, idx, options);
        if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`;
        return htmlResult;
      },
        // github 风格的报警
        md.use((md) => {
          const defaultRender = md.render
          md.render = function (...args) {

            // 调用原始渲染
            let defaultContent = defaultRender.apply(md, args)
            // 返回渲染的内容
            return defaultContent
          }
        },
      )
        // 时间轴
        md.use(timeline);
    },
  },
  //mermaid配置
  mermaid: {
  },

  // Mermaid 插件配置
  mermaidPlugin: {
    class: "mermaid my-class", // 为父容器设置额外的 CSS 类
  },
  themeConfig: {
    //中文化
    outlineTitle: '页面导航',
    // 大纲显示2-3级标题
    outline: [2, 4],

    // 本地搜索
    search: {
      provider: 'local'
    },
    // 链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/alkaid999/note-vitepress' }
    ],
    // 导航栏
    nav,
    // 侧边栏
    sidebar,
  }
})
