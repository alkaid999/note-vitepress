import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
    '/linux': [
        {
            collapsed: true, // 折叠侧边栏
            text: '<i class="ri-centos-fill" style="font-size: 1.5em; margin-right: 8px;"></i>Linux 简介',
            items: [
                { text: '<i class="ri-timeline-view" style="margin-right: 8px;"></i>发展经历', link: '/linux/01_Info/01' },
                { text: '<i class="ri-settings-2-line" style="margin-right: 8px;"></i>内核', link: '/linux/01_Info/02' },
                { text: '<i class="ri-git-repository-line" style="margin-right: 8px;"></i>发行版', link: '/linux/01_Info/03' },
                { text: '<i class="ri-computer-line" style="margin-right: 8px;"></i>桌面环境', link: '/linux/01_Info/04' },
                { text: '<i class="ri-open-source-line" style="margin-right: 8px;"></i>开源软件', link: '/linux/01_Info/05' },
                { text: '<i class="ri-server-line" style="margin-right: 8px;"></i>环境搭建', link: '/linux/01_Info/06' },
            ]
        },
        {
            collapsed: true,
            text: '<i class="ri-mac-fill" style="font-size: 1.5em; margin-right: 8px;"></i>Linux 基础',
            items: [
                { text: '<i class="ri-terminal-box-line" style="margin-right: 8px;"></i>终端', link: '/linux/02_Base/01' },
                { text: '<i class="ri-code-s-slash-line" style="margin-right: 8px;"></i>命令', link: '/linux/02_Base/02' },
                { text: '<i class="ri-command-line" style="margin-right: 8px;"></i>Shell', link: '/linux/02_Base/03' },
                { text: '<i class="ri-key-2-line" style="margin-right: 8px;"></i>环境变量', link: '/linux/02_Base/04' },
            ]
        },
        {
            collapsed: true,
            text: '<i class="ri-folder-settings-fill" style="font-size: 1.5em; margin-right: 8px;"></i>文件与目录管理',
            items: [
                { text: '<i class="ri-folder-settings-line" style="margin-right: 8px;"></i>目录结构', link: '/linux/03_Directory/01' },
                { text: '<i class="ri-folder-4-line" style="margin-right: 8px;"></i>文件和目录', link: '/linux/03_Directory/02' },
                { text: '<i class="ri-code-s-slash-line" style="margin-right: 8px;"></i>基础文件操作命令', link: '/linux/03_Directory/03' },
                { text: '<i class="ri-file-zip-line" style="margin-right: 8px;"></i>打包和压缩', link: '/linux/03_Directory/04' },
            ]
        },
        {
            collapsed: true,
            text: '<i class="ri-briefcase-4-fill" style="font-size: 1.5em; margin-right: 8px;"></i>软件管理',
            items: [
                { text: '<i class="ri-suitcase-2-line" style="margin-right: 8px;"></i>软件包', link: '/linux/04_Software/01.md' },
                { text: '<i class="ri-import-line" style="margin-right: 8px;"></i>RPM 包管理系统', link: '/linux/04_Software/02.md' },
                { text: '<i class="ri-download-cloud-2-line" style="margin-right: 8px;"></i>YUM/DNF 包管理器', link: '/linux/04_Software/03.md' },
                { text: '<i class="ri-code-s-slash-line" style="margin-right: 8px;"></i>源码包管理', link: '/linux/04_Software/04.md' },
                { text: '<i class="ri-file-code-line" style="margin-right: 8px;"></i>从源码包构建 RPM 包', link: '/linux/04_Software/05.md' },
            ],
        },
        {
            collapsed: true,
            text: '<i class="ri-file-settings-fill" style="font-size: 1.5em; margin-right: 8px;"></i>文本处理',
            items: [
                { text: '<i class="ri-vimeo-line" style="margin-right: 8px;"></i>Vim 文本编辑器', link: '/linux/05_Text/01.md' },
                { text: '<i class="ri-puzzle-2-line" style="margin-right: 8px;"></i>Vim 插件', link: '/linux/05_Text/02.md' },
                { text: '<i class="ri-code-s-slash-line" style="margin-right: 8px;"></i>基文本处理命令', link: '/linux/05_Text/03.md' },
                { text: '<i class="ri-search-2-line" style="margin-right: 8px;"></i>grep', link: '/linux/05_Text/04.md' },
                { text: '<i class="ri-bar-chart-horizontal-line" style="margin-right: 8px;"></i>sed', link: '/linux/05_Text/05.md' },
                { text: '<i class="ri-edit-line" style="margin-right: 8px;"></i>awk', link: '/linux/05_Text/06.md' },
            ],
        },
        {
            collapsed: true,
            text: '<i class="ri-shield-user-fill" style="font-size: 1.5em; margin-right: 8px;"></i>用户和用户组管理',
            items: [
                { text: '<i class="ri-user-settings-line" style="margin-right: 8px;"></i>用户与用户组概述', link: '/linux/06_User/01.md' },
                { text: '<i class="ri-file-text-line" style="margin-right: 8px;"></i>配置文件', link: '/linux/06_User/02.md' },
                { text: '<i class="ri-code-s-slash-line" style="margin-right: 8px;"></i>管理命令', link: '/linux/06_User/03.md' },

            ],
        },
        {
            collapsed: true,
            text: '<i class="ri-lock-unlock-fill" style="font-size: 1.5em; margin-right: 8px;"></i>权限管理',
            items: [
                { text: '<i class="ri-rotate-lock-line" style="margin-right: 8px;"></i>权限管理基础', link: '/linux/07_Permission/01.md' },
                { text: '<i class="ri-file-edit-line" style="margin-right: 8px;"></i>修改权限', link: '/linux/07_Permission/02.md' },
                { text: '<i class="ri-spam-line" style="margin-right: 8px;"></i>特殊权限', link: '/linux/07_Permission/03.md' },
                { text: '<i class="ri-file-forbid-line" style="margin-right: 8px;"></i>ACL 访问控制权限', link: '/linux/07_Permission/04.md' },
                { text: '<i class="ri-file-text-line" style="margin-right: 8px;"></i>扩展文件属性', link: '/linux/07_Permission/05.md' },
                { text: '<i class="ri-code-s-slash-line" style="margin-right: 8px;"></i>sudo 和 su 命令', link: '/linux/07_Permission/06.md' },
            ],
        },
        {
            collapsed: true,
            text: '<i class="ri-hard-drive-fill" style="font-size: 1.5em; margin-right: 8px;"></i>磁盘管理',
            items: [
                { text: '<i class="ri-node-tree" style="margin-right: 8px;"></i>文件系统基础与 VFS', link: '/linux/08_Disk/01.md' },
                { text: '<i class="ri-hard-drive-2-line" style="margin-right: 8px;"></i>硬盘结构与工作原理', link: '/linux/08_Disk/02.md' },
                { text: '<i class="ri-code-s-slash-line" style="margin-right: 8px;"></i>设备基础与常用命令', link: '/linux/08_Disk/03.md' },
                { text: '<i class="ri-layout-masonry-line" style="margin-right: 8px;"></i>分区', link: '/linux/08_Disk/04.md' },
                { text: '<i class="ri-link" style="margin-right: 8px;"></i>格式化与挂载', link: '/linux/08_Disk/05.md' }

            ],
        },
    ]
}