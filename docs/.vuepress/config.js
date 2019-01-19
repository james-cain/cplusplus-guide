module.exports = {
  title: 'cplusplus-guide',
  description: 'A blog about C++',
  base: '/guide/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    repo: 'james-cain/cplusplus-guide',
    editLinkText: '在GitHub上编辑此页',
    nav: [
      {
        text: '知识库',
        link: '/knowledge/'
      },
      {
        text: '其他',
        items: [
          {
            text: '作者twitter',
            link: 'https://twitter.com/Jamescain_lll'
          }
        ]
      }
    ],
    sidebar: {
      '/knowledge/': [
        {
          title: 'Essential C++',
          collapsable: false,
          children: [
            '/knowledge/essential-cplusplus-basic.md'
          ]
        }
      ]
    }
  }
}