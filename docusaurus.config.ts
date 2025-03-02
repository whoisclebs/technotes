import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'WhoIsClebs - TechNotes',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/icon.png',
  url: 'https://technotes.whoisclebs.com',
  baseUrl: '/',
  organizationName: 'whoisclebs',
  projectName: 'technotes',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    algolia: {
      appId: 'D7ECK21EJH',
      apiKey: '0c17321a1812472cdbcd100c270d6c1d',
      indexName: 'technotes_title',
    },
    navbar: {
      title: 'TechNotes',
      logo: {
        alt: 'TechNotes Logo',
        src: 'img/icon.png',
        srcDark: 'img/icon.png',
      },
      items: [
      ],
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TechNotes. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
