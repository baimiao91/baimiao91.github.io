module.exports = {
  dest: './Baimiao',
  base: '/Lyrics/',
  markdown: {
    toc: {
      includeLevel: [2, 3]
    }
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '诗萝k',
      description: '人生如戏，全靠演技，当音乐响起没有你看不透的把戏'
    }
  },
  head: [
    ['link', {
      rel: 'icon',
      href: `/pre.jpg`
    }],
    ['link', {
      rel: 'manifest',
      href: '/manifest.json'
    }],
    ['meta', {
      name: 'theme-color',
      content: '#3eaf7c'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black'
    }],
    ['meta', {
      name: 'msapplication-TileColor',
      content: '#000000'
    }]
  ],
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    repo: 'baimiao91',
    editLinks: false,
    docsDir: 'lyrics',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '编辑此页',
        lastUpdated: '上次更新',
        nav: [
					// {
          //   text: '快速搭建开发环境',
          //   link: '/zh/standard/Start.md'
          // }, {
          //   text: '项目相关',
          //   items: [{
          //     text: '前端规范',
          //     link: '/zh/standard/Standard.md'
          //   }, {
          //     text: '项目流程',
          //     link: '/zh/standard/Project.md'
          //   }, {
          //     text: '移动端兼容问题',
          //     link: '/zh/standard/Compatibility.md'
          //   }],
					// },
					{
						text: '生当作人杰',
						items:[{
							text:'诗萝k',
							link: '/zh/Lyrics/poem.md',
						}, {
							text:'Lyrics',
							link:'/zh/Lyrics/Lyrics.md'
						}, {
							text:'白描',
							link:'/zh/Lyrics/Baimiao.md'
						}]
					}, {
						text: 'charles简单配置',
						link: '/zh/charles/Index.md'
					}
        ]
      }
    },
	}
}

function genSidebarConfig(title) {
  return [{
    title,
    collapsable: false,
    children: [
      '',
      'getting-started',
      'basic-config',
      'assets',
      'markdown',
      'using-vue',
      'custom-themes',
      'i18n',
      'deploy'
    ]
  }]
}