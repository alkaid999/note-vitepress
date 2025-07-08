import type { NavData } from './types'

export const NAV_DATA: NavData[] = [
  {
    title: '常用工具',
    items: [
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: 'TinyPNG',
        badge: {
          text: '常用',
          type: 'warning',
        },
        desc: '在线图片压缩工具',
        link: 'https://tinypng.com'
      },
      {
        icon: 'https://cdn.jx3box.com/static/index/favicon.ico',
        title: 'JX3Box',
        badge: {
          text: '常用',
          type: 'warning',
        },
        desc: '剑三真好玩，魔盒真好用',
        link: 'https://www.jx3box.com/'
      },
    ]

  },
  {
    title: '在线 AI 工具',
    items: [
      {
        icon: 'https://chat.deepseek.com/favicon.svg',
        title: 'DeepSeek',
        link: 'https://chat.deepseek.com/'
      },
      {
        icon: 'https://statics.moonshot.cn/kimi-chat/favicon.ico',
        title: 'Kimi',
        link: 'https://kimi.moonshot.cn/'
      },
      {
        icon: 'https://cdn-bot.hunyuan.tencent.com/logo-v2.png',
        title: '腾讯元宝',
        link: 'https://yuanbao.tencent.com/'
      },
      {
        icon: 'https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/web/logo-icon.png',
        title: '抖音豆包',
        link: 'https://www.doubao.com/'
      },
    ]
  },
]