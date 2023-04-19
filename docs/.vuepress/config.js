const sidebar = require('./sidebar')
module.exports = {
    title: 'console.log("刘文博")',
    description: '记录，成为更好的自己。',
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['link', { rel: 'icon', href: '/battery.png' }]
    ],
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        type: 'blog',
        nav: [
            { text: '时间线', link: '/timeline/', icon: 'reco-date'},
        ],
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认 “分类”
            },
            tag: {
              location: 3, // 在导航栏菜单中所占的位置，默认3
              text: '标签' // 默认 “标签”
            },
            socialLinks: [
                { icon: 'reco-github', link: 'https://github.com/AliveCrow' },
            ],
        },
        authorAvatar: '/avatar.jpg',
        search: true,
        searchMaxSuggestions: 10,
        sidebar,
        subSidebar: 'auto',
        sidebarDepth: 4,
        lastUpdated: '上次更新',
        nextLinks: true,
        prevLinks: true,
        startYear: '2023',
    },
    plugins: [
        ['@vuepress-reco/vuepress-plugin-pagation', {
            perPage: 12
        }],
    ]
}