import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/': [
        {
            collapsed: false, // 折叠侧边栏
            text: 'Examples',
            items: [
                { text: 'Markdown Examples', link: '/markdown-examples' },
                { text: 'Runtime API Examples', link: '/api-examples' }
            ]
        }
    ]
}