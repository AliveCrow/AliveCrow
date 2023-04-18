module.exports = {
    title: 'console.log("刘文博")',
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['link', { rel: 'icon', href: '/battery.png' }]
    ],
    host: "0.0.0.0",
    port: 3333,
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    theme: 'reco',
    themeConfig: {
        type: 'blog',
        sidebar: 'auto',
        subSidebar: 'auto',
        modePicker: false,
        authorAvatar: '/avatar.jpg',
        nextLinks: true,
        prevLinks: true,
        nav: [
            { text: '时间线', link: '/timeline/', icon: 'reco-date'},
        ],
        // 博客配置
        blogConfig: {
            category: {
                location: 1,     // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认文案 “分类”
            },
            tag: {
                location: 2,     // 在导航栏菜单中所占的位置，默认3
                text: '标签'      // 默认文案 “标签”
            },
            socialLinks: [     // 信息栏展示社交信息
                { icon: 'reco-github', link: 'https://github.com/AliveCrow' },
                { icon: 'reco-npm', link: 'https://www.npmjs.com/~gritwork' }
            ],
            // 项目开始时间，只填写年份
            startYear: '2023'
        }
    }
    // configureWebpack: {
    //     resolve: {
    //         alias: {
    //             '@alias': ''
    //         }
    //     }
    // }
}