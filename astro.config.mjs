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
			favicon: 'favicon.png',
			editLink: {
				baseUrl: 'https://github.com/TTNRT/docswebsite/edit/main/',
			},
			sidebar: [
				{
					label: 'TTGit',
					items: [
						// Each item here is one entry in the navigation menu.
						{ 
							label: 'Actions interface', 
							items: [
								{
									label: 'Woodpekcer CI',
									slug: 'ttgit/actions/woodpecker'
								},
								{
									label: 'Standard actions',
									slug: 'ttgit/actions/actions'
								},
								{
									label: 'Renovate bot',
									slug: 'ttgit/actions/renovate-bot'
								}
							]
						},
						{
							label: 'Customize your account',
							items: [
								{
									label: 'Overview widget',
									slug: 'ttgit/customize/overview'
								},
								{
									label: 'Profile bio',
									slug: 'ttgit/customize/bio'
								}
							]
						},
						{
							label: 'Login methods',
							items: [
								{
									label: 'Information',
									slug: 'ttgit/loginmethods/information'
								},
								{
									label: 'Google',
									slug: 'ttgit/loginmethods/google'
								},
								{
									label: 'GitHub',
									slug: 'ttgit/loginmethods/github'
								}
							]
						},
						{
							label: 'Authentication',
							items: [
								{
									label: 'The use of Access Tokens',
									slug: 'ttgit/authentication/the-use-of-access-tokens'
								}
							]
						},
						{
							label: 'Setup your Git client',
							slug: 'ttgit/setupgitclient'
						},
						{
							label: 'Setting up TTPages',
							slug: 'ttgit/setupttpages'
						},
						{
							label: 'Using an IDE editor',
							slug: 'ttgit/usinganide'
						}
					],
				},
				{
					label: 'MyTT',
					items: [
						{
							label: 'Account management',
							items: [
								{
									label: 'Creating an account',
									slug: 'mytt/account/creating'
								},
								{
									label: 'Deleting your account',
									slug: 'mytt/account/deletion'
								},
								{
									label: 'Resetting your password',
									slug: 'mytt/account/password-reset'
								},
								{
									label: 'Privacy settings',
									slug: 'mytt/account/privacy-settings'
								}
							]
						},
						{
							label: 'Customize your profile',
							items: [
								{
									label: 'Information',
									slug: 'mytt/customize/information'
								},
								{
									label: 'Bio widget',
									slug: 'mytt/customize/bio'
								},
								{
									label: 'Banner widget',
									slug: 'mytt/customize/banner'
								}
							]
						}
					]
				},
				{
					label: 'API',
					items: [
						{
							label: 'Information',
							slug: 'api/information'
						},
						{
							label: 'myTT',
							items: [
								{
									label: 'Requesting data',
									slug: 'api/mytt/request-data'
								},
								{
									label: 'Profile banner',
									slug: 'api/mytt/profile-banner'
								}
							]
						}
					]
				}
			],
		}),
	],
});
