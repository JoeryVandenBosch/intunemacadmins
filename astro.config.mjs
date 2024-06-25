import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Intune Mac Admins',
			social: {
				github: 'https://github.com/ugurkocde/intunemacadmins',
			},
			sidebar: [
				/* 				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				}, */
				{
					label: 'Home',
					autogenerate: { directory: 'Home' },
				},
				{
					label: 'Community',
					autogenerate: { directory: 'Community' },
				},
				{
					label: 'Await Final Configuration',
					autogenerate: { directory: 'Await Final Configuration' },
				},
				{
					label: 'Platform Single Sign-On (PSSO)',
					autogenerate: { directory: 'Platform Single Sign-On' },
				},
				{
					label: 'Custom Attributes',
					autogenerate: { directory: 'Custom Attributes' },
				},
				{
					label: 'FileVault',
					autogenerate: { directory: 'FileVault' },
				},
			],
		}),
	],
});
