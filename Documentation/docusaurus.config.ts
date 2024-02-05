import { themes as prismThemes } from 'prism-react-renderer'
import type {Config} from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const config: Config = {
	title: 'VladimirCreator/Packages',

	url: 'https://vladimircreator.github.io/',
	baseUrl: '/Packages',

	// GitHub Pages
	organizationName: 'VladimirCreator',
	projectName: 'Packages',

	onBrokenLinks: 'ignore', onBrokenMarkdownLinks: 'warn',

	i18n: {
		defaultLocale: 'en',
		locales: [
			'en'//, 'ru'
		]
	},

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts'
				},
				theme: {
					customCss: './src/css/custom.css'
				}
			} satisfies Preset.Options
		]
	],

	themeConfig: {
		navbar: {
			title: 'Vladimir’s Packages',
			items: [
				/*{
					type: 'localeDropdown'
				},*/
				{
					type: 'docSidebar',
					sidebarId: 'tutorialSidebar',
					position: 'left',
					label: 'Documentation',
				}
			]
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'More',
					items: [
						{
							label: 'GitHub',
							href: 'https://github.com/VladimirCreator/Packages/'
						}
					]
				}
			],
			copyright: `Copyright © ${new Date().getFullYear()} VladimirCreator. Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github, darkTheme: prismThemes.dracula
		}
	} satisfies Preset.ThemeConfig
}

export default config
