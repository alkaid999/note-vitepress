import DefaultTheme from 'vitepress/theme';
// 导入自定义样式文件
import './style/index.css';
// 导入图片放大插件
import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute, useData } from 'vitepress';
// 使用插槽实现返回顶部按钮
import { h } from 'vue';
import backTop from './components/backtotop.vue';
// 导入文章元数据组件（字数统计和阅读时间）
import ArticleMetadata from './components/ArticleMetadata.vue';
// 引入时间轴样式
import "vitepress-markdown-timeline/dist/theme/index.css";
// 引入目录树样式
import { LiteTree } from '@lite-tree/vue'
// 引入 remixicon 图标
import 'remixicon/fonts/remixicon.css';

export default {
  extends: DefaultTheme, // 继承默认主题

  // 注册全局组件
  enhanceApp({ app }) {
    // 注册文章元数据组件
    app.component('ArticleMetadata', ArticleMetadata);
    // 注册目录树组件
    app.component('LiteTree', LiteTree)
  },

  // 自定义布局
  Layout() {
    const props: Record<string, any> = {};
    // 获取 frontmatter 数据
    const { frontmatter } = useData();

    // 如果 frontmatter 中定义了 layoutClass，则添加到布局的 class 中
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass;
    }

    // 使用默认布局，并注入返回顶部按钮到 doc-footer-before 插槽
    return h(DefaultTheme.Layout, props, {
      'doc-footer-before': () => h(backTop),
    });
  },

  // 初始化逻辑
  setup() {
    const route = useRoute();

    // 初始化图片放大功能
    const initZoom = () => {
      // 为所有 .main img 元素启用图片放大功能
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' });
    };

    // 组件挂载时初始化图片放大功能
    onMounted(() => {
      initZoom();
    });

    // 监听路由变化，在路由变化后重新初始化图片放大功能
    watch(
      () => route.path,
      () => nextTick(() => initZoom()),
    );
  },
};