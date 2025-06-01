import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import tailwindPlugin from "./plugins/tailwind-config.cjs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Amicale du Don de Sang de Lyon",
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
          postsPerPage: 10,
          blogSidebarTitle: 'Tous les articles',
          blogSidebarCount: 'ALL',
          showReadingTime: false,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'ignore',
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
      title: 'Amicale du Don de Sang de Lyon',
      logo: {
        alt: 'Amicale du Don de Sang de Lyon Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: 'Documentation',
        },
        {to: '/blog', label: "Actualités", position: 'right'}, 
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Liens utiles',
          items: [  
            {
              html: `
                <a href="https://www.helloasso.com/associations/amicale-des-donneurs-de-sang-benevoles-de-lyon-adsbl" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="text-white hover:text-white">
                  Adhérer à notre amicale
                </a>
              `,
            },
            {
              html: `
                <a target="_blank" rel="noopener noreferrer" style="color:white;">
                  Site de l'Union Départementale (à venir)
                </a>
              `,
            },
            {
              html: `
                <a href="https://ffdsb.org/" target="_blank" rel="noopener noreferrer" style="color:white;">
                  Site de la Fédération
                </a>
              `,
            },
          ],
        },
        {
          title: 'Outils',
          items: [
            {
              html: `
                <a href="https://doodle.com/sign-up-sheet/participate/aab185ba-e804-4519-89fd-f1997581b7dc/select" target="_blank" rel="noopener noreferrer" style="color:white;">
                  Prochaines collectes
                </a>
              `,
            },
            {
              html: `
                <a href="https://docs.google.com/spreadsheets/d/1OUxyzw0wmd8CCfRR6bCqmAAX4v2LReIGmcZGQbe84vs/edit?usp=sharing" target="_blank" rel="noopener noreferrer" style="color:white;">
                  Comptabilité
                </a>
              `,
            },
            {
              html: `
                <a target="_blank" rel="noopener noreferrer" style="color:white;">
                  Statistiques (à venir)
                </a>
              `,
            },
            {
              html: `
                <a target="_blank" rel="noopener noreferrer" style="color:white;">
                  Gestion des collectes (à venir)
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
              <div class="flex flex-col">
                <a href="mailto:adsbl69@hotmail.com" target="_blank" rel="noopener noreferrer" class="flex items-center w-fit" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><path fill="white" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"/></svg>
                  <span style="color:white; margin-left:8px;">Email</span>
                </a>
                <a href="https://www.instagram.com/dondusanglyon/" target="_blank" rel="noopener noreferrer" class="flex items-center w-fit">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 14 14"><path fill="white" fill-rule="evenodd" d="M3.39.787A2.604 2.604 0 0 0 .786 3.39v6.944a2.604 2.604 0 0 0 2.604 2.604h6.944a2.604 2.604 0 0 0 2.603-2.604V3.39A2.604 2.604 0 0 0 10.334.787zm7.693 2.607a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-4.22 1.388a2.08 2.08 0 1 0 0 4.16a2.08 2.08 0 0 0 0-4.16m-3.081 2.08a3.08 3.08 0 1 1 6.16 0a3.08 3.08 0 0 1-6.16 0" clip-rule="evenodd"/></svg>
                  <span style="color:white; margin-left:8px;">Instagram</span>
                </a>
              </div>
              `,
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} - Amicale du Don de Sang de Lyon`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [tailwindPlugin],
};

export default config;
