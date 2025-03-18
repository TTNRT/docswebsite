// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	image: {
		// Example: Enable the Sharp-based image service with a custom config
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
			social: {
				github: 'https://github.com/TTNRT',
			},
			logo: {
				src: './src/assets/logo.png',
			},
			editLink: {
				baseUrl: 'https://github.com/TTNRT/docswebsite/edit/main/',
			},
			sidebar: [
				{
					label: 'TTGit',
					items: [
						// Each item here is one entry in the navigation menu.
						{ 
							label: 'Using the actions interface', 
							slug: 'ttgit/actionssetup' 
						},
						{
							label: 'Customize your profile',
							slug: 'ttgit/customizeprofile'
						},
						{
							label: 'Setup your Git client',
							slug: 'ttgit/setupgitclient'
						},
						{
							label: 'Setup the CI interface',
							slug: 'ttgit/setuptheci'
						},
						{
							label: 'Setting up TTPages',
							slug: 'ttgit/setupttpages'
						},
						{
							label: 'Using an IDE editor',
							slug: 'ttgit/usinganide'
						},
						{
							label: 'Login methods',
							slug: 'ttgit/loginmethods'
						}
					],
				},
				{
					label: 'MyTT',
					items: [
						{
							label: 'Creating your account',
							slug: 'mytt/accountcreate'
						},
						{
							label: 'Deleting your account',
							slug: 'mytt/accountdeletion'
						},
						{
							label: 'Resetting your account password',
							slug: 'mytt/passwordreset'
						},
						{
							label: 'Customizing your profile',
							slug: 'mytt/profilecustomize'
						},
						{
							label: 'Profile banner',
							slug: 'mytt/profilebanner'
						},
						{
							label: 'Privacy settings',
							slug: 'mytt/privacy-settings'
						}
					]
				},
				{
					label: 'API',
					items: [
						{
							label: 'Using the API',
							slug: 'api/usingtheapi'
						},
						{
							label: 'Grab myTT data',
							slug: 'api/grabmyttdata'
						}
					]
				}
			],
		}),
	],
});
