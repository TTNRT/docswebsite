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
			title: 'TTNRT Developer documentation',
			description: 'Our documentation website containing all of our knowledge base documents!',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/TTNRT' }
			],
			logo: {
				src: './src/assets/logo.png',
			},
			editLink: {
				//baseUrl: 'https://pr.new/github.com/TTNRT/docswebsite/edit/main/'
				baseUrl: 'https://github.dev/TTNRT/docswebsite/blob/main/'
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
					label: 'API backends',
					items: [
						{
							label: 'myTT',
							autogenerate: {directory: 'api/mytt'}
						},
						{
							label: 'TTGit',
							autogenerate: {directory: 'api/ttgit'}
						}
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
