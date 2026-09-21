// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import pagePlugin from '@pelagornis/page';

// https://astro.build/config
export default defineConfig({
    site: 'https://data.umsa.bo',
    redirects: {
        '/app': '/descargas',
    },
    integrations: [starlight({
        title: 'Documentación DataUMSA',
        plugins: [pagePlugin()],
        head: [
            {
                tag: 'script',
                content: "if (!localStorage.getItem('starlight-theme')) { localStorage.setItem('starlight-theme', 'light'); }",
            },
        ],
        sidebar: [
            { label: '🏠 Volver a la Web Principal', link: '/' },
            { label: '🚀 Ir a la Plataforma', link: 'https://app.data.umsa.bo/' },
            {
                label: 'Primeros Pasos',
                items: [
                    { label: 'Empezando con DataUMSA', slug: 'docs/guides/empezando' },
                    { label: 'Inicio Rápido en 5 Pasos', slug: 'docs/guides/inicio-rapido' },
                ],
            },
            {
                label: 'Diseño de Cuestionarios',
                items: [
                    { label: 'Constructor Web de Formularios', slug: 'docs/guides/constructor-formularios' },
                    { label: 'Cuestionarios en Excel (XLSForm)', slug: 'docs/guides/formularios-excel-xlsform' },
                    { label: 'Idiomas y Lenguas Originarias', slug: 'docs/guides/configuracion-idiomas' },
                ],
            },
            {
                label: 'Operaciones en Terreno',
                items: [
                    { label: 'Recolección en Terreno y Web', slug: 'docs/guides/recoleccion-datos-campo-web' },
                    { label: 'Gestión y Validación de Datos', slug: 'docs/guides/gestion-proyectos-datos' },
                ],
            },
            {
                label: 'Análisis e Integraciones',
                items: [
                    { label: 'Análisis Rápido, Gráficos y Mapas', slug: 'docs/guides/analisis-datos-reportes' },
                    { label: 'Integración con Power BI y Excel', slug: 'docs/guides/integracion-powerbi-excel' },
                ],
            },
            {
                label: 'Soberanía y Seguridad',
                items: [
                    { label: 'Seguridad y Protección de Datos', slug: 'docs/guides/seguridad-proteccion-datos' },
                ],
            },
            {
                label: 'Referencia Técnica',
                items: [{ autogenerate: { directory: 'docs/reference' } }],
            },
        ],
		}), react(), sitemap()],
    vite: {
    plugins: [tailwindcss()],
  },
});