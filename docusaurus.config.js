module.exports = {
  title: 'Completium',
  tagline: 'From conception to completion',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'edukera', // Usually your GitHub org/user name.
  projectName: 'completium-landing', // Usually your repo name.
  stylesheets: ['https://fonts.googleapis.com/icon?family=Material+Icons'],
  plugins: ['./src/plugins/dapp'],
  themeConfig: {
    navbar: {
      hideOnScroll: true,
    },
    hideableSidebar: false,
    prism: {
      theme: require('./src/theme/prism-archetype-theme'),
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',
      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,
    },
    navbar: {
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: 'docs/dapp-first', label: 'First DApp', position: 'left' },
        { to: 'dapps', label: 'DApps', position: 'left' },
        { to: '/docs/contract', label: 'Smart Contract', position: 'left' },
        {
          to: '/docs/templates',
          label: 'Contract Templates',
          position: 'left',
        },
        {
          to: '/docs/verification',
          label: 'Formal Verification',
          position: 'left',
        },
        { to: '/docs/cli', label: 'CLI', position: 'left' },
        { to: 'docs/dapp-tools', label: 'Technical stack', position: 'left' },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/edukera/completium-landing',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'First Dapp', to: 'docs/dapp-first' },
            { label: 'DApps', to: '/dapps' },
            { label: 'Smart Contract', to: '/docs/contract' },
            { label: 'Contract Templates', to: '/docs/templates' },
            { label: 'Formal Verification', to: '/docs/verification' },
            { label: 'CLI', to: '/docs/cli' },
            { label: 'Technical Stack', to: 'docs/dapp-tools/' },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://join.slack.com/t/tezos-dev/shared_invite/zt-1itnwbcmb-5ixvjUYSM1gd4GbGoXIOsw',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/archetype_lang',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Archetype',
              to: 'https://archetype-lang.org/',
            },
            {
              label: 'Edukera',
              to: 'https://www.edukera.com/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/edukera/completium-landing',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Edukera, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/edukera/completium-landing/tree/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
}
