import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import tailwindPlugin from "./plugins/tailwind-config.cjs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Amicale Don du Sang de Lyon",
  // tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'Amicale-du-Don-du-Sang-de-Lyon', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    navbar: {
      title: 'Amicale Don du Sang de Lyon',
      logo: {
        alt: 'Amicale Don du Sang de Lyon Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: 'Documentation',
        },
        {to: '/blog', label: "Blog de l'asso", position: 'right'}, 
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              html: `
                <a href="https://github.com/youraccount" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;">
                  <img src="/img/logo.png" alt="GithhHub" style="width:24px;height:24px;" />
                  <span style="color:white; margin-left:8px;">Accueil</span>
                </a>
              `,
            },
          ],
        },
        {
          title: 'Nous contacter',
          items: [
            {
              html: `
              <a href="https://twitter.com/youraccount" target="_blank" rel="noopener noreferrer">
                <img src="/img/logo.png" alt="Twitter" style="width:24px;height:24px;margin-right:8px;" />
              </a>
              <a href="https://github.com/youraccount" target="_blank" rel="noopener noreferrer">
                <img src="/img/logo.png" alt="GitHub" style="width:24px;height:24px;" />
              </a>
              `,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Amicale Don du Sang de Lyon. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [tailwindPlugin],
};

export default config;
