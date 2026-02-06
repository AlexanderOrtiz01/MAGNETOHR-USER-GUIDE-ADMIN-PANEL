// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Guia de Usuario - Admin Panel',
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Español',
					lang: 'es',
				},
			},
			customCss: [
				'./src/styles/custom.css',
			],
			head: [
				{
					tag: 'script',
					attrs: {
						src: '/force-light-theme.js',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						type: 'image/x-icon',
						href: '/favicon.ico',
					},
				},
			],
			components: {
				ThemeSelect: './src/components/EmptyThemeSelect.astro',
			},
			sidebar: [
				{
					label: 'Panel General (Overview Dashboard)',
					items: [
						{ label: 'Conociendo los KPIs', slug: 'guides-company/getting-to-know-kpis' },
						{ label: 'Conociendo las Tablas (Tables)', slug: 'guides-company/getting-to-know-tables' },
					],
				},
				{
					label: 'Soporte Y Moderación (Support & Moderation)',
					items: [
						{ label: 'Ofertas de Trabajo Pendientes (Pending Job Posts)', slug: 'guides-company/pending-job-posts' },
						{ label: 'Ofertas de Trabajo Aprobadas (Approved Job Posts)', slug: 'guides-company/approved-job-posts' },
						{ label: 'Ofertas de Trabajo Rechazadas (Rejected Job Posts)', slug: 'guides-company/rejected-job-posts' },
					],
				},
				{
					label: 'Descuentos En Funciones Premium (Premium Features Discount)',
					items: [
						{ label: '¿Cómo le asigno un descuento a una compañía o candidato?', slug: 'guides-company/assign-discount' },
					],
				},
				{
					label: 'Buscador De Job Seekers (Job Seeker Finder)',
					items: [
						{ label: '¿Cómo busco un candidato?', slug: 'guides-company/search-candidate' },
					],
				},
				{
					label: 'Usuarios (Users)',
					items: [
						{ label: '¿Cómo veo los Usuarios Administradores?', slug: 'guides-company/view-admin-users' },
					],
				},
			],
		}),
	],
});
