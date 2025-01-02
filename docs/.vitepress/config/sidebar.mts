import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/linux': [
        {
            collapsed: false, // 折叠侧边栏
            text: 'Linux 基础',
            items: [
                { text: '发展经历', link: '/linux/01_Info/01' },
                { text: '内核', link: '/linux/01_Info/02' },
                { text: '发行版', link: '/linux/01_Info/03' },
                { text: '桌面环境', link: '/linux/01_Info/04' },
                { text: '开源软件', link: '/linux/01_Info/05' },
                { text: '环境搭建', link: '/linux/01_Info/06' },
            ]
        }
    ]
}