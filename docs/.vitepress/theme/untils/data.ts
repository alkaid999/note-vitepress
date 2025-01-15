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
    ]
  },
]