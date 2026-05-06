// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MYMI 유저가이드',
  tagline: 'AI 작품 속 인물과 자유롭게 대화하고, 나만의 작품을 만들어보세요',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://mymi.live',
  baseUrl: '/guide/',

  organizationName: 'Jungwon423',
  projectName: 'mymi-user-guide',

  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  // Inject Pretendard webfont (한글+영문 통합)
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css',
      type: 'text/css',
    },
  ],

  // Naver / Google search-console / OG defaults can be added here
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'naver-site-verification',
        content: 'TODO_NAVER_VERIFICATION',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:site_name',
        content: 'MYMI 유저가이드',
      },
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/Jungwon423/mymi-user-guide/edit/master/',
          showLastUpdateTime: true,
        },
        blog: false, // 블로그 비활성화
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: [],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/og-default.png',
      metadata: [
        {name: 'keywords', content: 'MYMI, AI, 챗봇, 인터랙티브, 웹소설, 유저가이드, 사용법'},
        {name: 'description', content: 'MYMI 유저가이드 — AI 작품 속 인물과 대화하고 직접 작품을 만드는 모든 방법'},
      ],
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'MYMI 유저가이드',
        logo: {
          alt: 'MYMI',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://mymi.live',
            label: '서비스 바로가기',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '가이드',
            items: [
              {label: 'MYMI란?', to: '/getting-started/what-is-mymi'},
              {label: '대화하기', to: '/chatting/chat-with-character'},
              {label: '작품 만들기', to: '/character-creation/create-character'},
            ],
          },
          {
            title: '정책',
            items: [
              {label: '이용약관 / 정책', to: '/policy/terms'},
              {label: '결제수단', to: '/payment/payment-methods'},
              {label: 'FAQ', to: '/faq'},
            ],
          },
          {
            title: '서비스',
            items: [
              {label: 'mymi.live', href: 'https://mymi.live'},
              {label: '문의', href: 'mailto:contact@mymi.live'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 원모 주식회사 (Wonmo Inc.)`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
