import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/linux': [
        {
            collapsed: true, // 折叠侧边栏
            text: 'Linux 简介',
            items: [
                { text: '发展经历', link: '/linux/01_Info/01' },
                { text: '内核', link: '/linux/01_Info/02' },
                { text: '发行版', link: '/linux/01_Info/03' },
                { text: '桌面环境', link: '/linux/01_Info/04' },
                { text: '开源软件', link: '/linux/01_Info/05' },
                { text: '环境搭建', link: '/linux/01_Info/06' },
            ]
        },
        {
            collapsed: true,
            text: 'Linux 基础',
            items: [
                { text: '终端', link: '/linux/02_Base/01' },
                { text: '命令', link: '/linux/02_Base/02' },
                { text: 'Shell', link: '/linux/02_Base/03' },
                { text: '环境变量', link: '/linux/02_Base/04' },
            ]
        },
        {
            collapsed: true,
            text: '文件与目录管理',
            items: [
                { text: '文件系统基础概念', link: '/linux/03_Directory/01' },
                { text: '文件和目录', link: '/linux/03_Directory/02' },
                { text: '基础文件操作命令', link: '/linux/03_Directory/03' },
                { text: '打包和压缩', link: '/linux/03_Directory/04' },
            ]
        },
        {
            collapsed: true,
            text: '软件管理',
            items: [
                { text: '软件包', link: '/linux/04_Software/01.md' },
                { text: 'RPM 包管理系统', link: '/linux/04_Software/02.md' },
                { text: 'YUM/DNF 包管理器', link: '/linux/04_Software/03.md' },
                { text: '源码包管理', link: '/linux/04_Software/04.md' },
                { text: '从源码包构建 RPM 包', link: '/linux/04_Software/05.md' },
            ],
        },
        {
            collapsed: true,
            text: '文本处理',
            items: [
                { text: 'Vim 文本编辑器', link: '/linux/05_Text/01.md' },
                { text: 'Vim 插件', link: '/linux/05_Text/02.md' },
                { text: '文本处理命令', link: '/linux/05_Text/03.md' },
            ],
        },
    ]
}