// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	devToolbar: {
		enabled: false
	},
	image: {
		service: {
		   	entrypoint: 'astro/assets/services/sharp',
		   	config: {
			 	limitInputPixels: false,
		  	},
		},
	},
	integrations: [
		starlight({
			title: 'TTNRT Docs',
			description: 'Our documentation website for our services',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/TTNRT' }
			],
			logo: {
				src: './src/assets/logo.png',
			},
			pagination: false,
			lastUpdated: true,
			favicon: 'favicon.png',
			customCss: [
				'./src/styles/default-styles.css'
			],
			sidebar: [
				{
					label: 'Our policy documents',
					items: [
						{
							label: 'Table of contents',
							slug: 'polices'
						},
						{
							label: 'Terms and conditions',
							autogenerate: {directory: 'polices/terms-of-use'}
						},
						{
							label: 'Contributions guidelines',
							autogenerate: {directory: 'polices/contributions'}
						},
						{
							label: 'Other documents',
							autogenerate: {directory: 'polices/other'}
						},
					]
				},
				{
					label: 'TTGit',
					items: [
						{ 
							label: 'Workflow interfaces', 
							autogenerate: {directory: 'ttgit/actions'}
						},
						{
							label: 'Customize your account',
							autogenerate: {directory: 'ttgit/customize'}
						},
						{
							label: 'Authentication',
							autogenerate: {directory: 'ttgit/authentication'}
						},
					],
				},
				{
					label: 'MyTT',
					items: [
						{
							label: 'Account management',
							autogenerate: {directory: 'mytt/account'}
						},
						{
							label: 'Customize your profile',
							autogenerate: {directory: 'mytt/customize'}
						},
						{
							label: 'API refernece',
							autogenerate: {directory: 'mytt/api'}
						}
					]
				},
				{
					label: 'References',
					items: [
						{
							label: 'The use of our API',
							slug: 'references/using-the-api'
						}
					]
				},
				{
					label: 'TTPages',
					autogenerate: {directory: 'ttpages'}
				}
			],
		}),
	],
});
