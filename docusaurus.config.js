// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Catbow Tutorial',
	tagline: 'Get up to Speed with Catbow',
	url: 'https://catbow.github.io',
	baseUrl: '/catbow-docs',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'catbow', // Usually your GitHub org/user name.
	projectName: 'catbow-doc.github.io', // Usually your repo name.
	trailingSlash: false,

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'ko-kr'],
		path: 'i18n',
		localeConfigs: {
			en: {
				label: 'English',
				direction: 'ltr',
				htmlLang: 'en-US',
				calendar: 'gregory',
				path: 'en'
			},
			ko: {
				label: 'Korean',
				direction: 'ltr',
				htmlLang: 'ko-KR',
				calendar: 'gregory',
				path: 'ko-kr'
			}

		}
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					routeBasePath: '/',
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: 'https://github.com/catbow/catbow-docs/tree/main/',
				},
				blog: false,
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			metadata: [{ name: 'catbow', content: 'scrollview, react, scroll, view, catbow, library, scrolleffect, effect, interactive, observer, intersection,Intersection Observer API, open source, scrollevent, ui library' }, { name: 'google-site-verification', content: '8n_JmK4-WSqrcMBpFeuYl7NbWghx-tqnXoFZXsdeqfE' }],

			navbar: {
				title: 'Catbow',
				logo: {
					alt: 'My Site Logo',
					src: 'img/catbow.png',
				},
				items: [
					{
						href: 'https://github.com/catbow/catbow-custom',
						label: 'GitHub',
						position: 'right',
					},
					{
						type: 'localeDropdown',
						position: 'left'
					}
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Tutorial',
								to: '/',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Github',
								href: 'https://github.com/catbow/catbow-custom',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Catbow`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
