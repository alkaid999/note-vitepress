import DefaultTheme from 'vitepress/theme'
// 导入自定义样式
import './style/index.css';
// 导入图片放大插件
import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
// 使用插槽 backTop
import { h } from 'vue';
import backTop from './components/backtotop.vue'
// 导入字数及阅读时间
import ArticleMetadata from "./components/ArticleMetadata.vue"

export default {
  extends: DefaultTheme,
  // 注册全局组件
  enhanceApp({app}) { 
    // 字数及阅读时间组件
    app.component('ArticleMetadata' , ArticleMetadata)
  },
  // 返回顶部插件设置
  Layout() { 
    return h(DefaultTheme.Layout, null, {
      'doc-footer-before': () => h(backTop), // 使用doc-footer-before插槽
    })
  },
  setup() {
    // 图片放大插件
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
}