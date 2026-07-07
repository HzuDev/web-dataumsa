// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from "@tailwindcss/vite";

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    redirects: {
        '/app': '/descargas',
    },
    integrations: [starlight({
        title: 'Documentación DataUMSA',
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/dataumsa' }],
        sidebar: [
            {
                label: 'Guías',
                items: [
                    { label: 'Inicio Rápido', slug: 'docs/guides/inicio-rapido' },
                ],
            },
            {
                label: 'Referencia',
                items: [{ autogenerate: { directory: 'docs/reference' } }],
            },
        ],
		}), react()],
    vite: {
    plugins: [tailwindcss()],
  },
});