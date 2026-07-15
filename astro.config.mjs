// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
const port = 8000
const domain = import.meta.env.PROD ? 'https://docs.ttnrtsite.me' : `http://localhost:${port}`
export default defineConfig({
    site: domain,
    output: 'static',
    compressHTML: false,
    trailingSlash: 'never',
    server: {
        host: true,
        port: port
    },
    devToolbar: {
        enabled: false
    },
    build: {
        format: 'file'
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
            title: 'Corporate Documentation',
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
                    label: 'TTGit',
                    items: [
                        {
                            label: 'Workflow interfaces',
                            items: [{ autogenerate: {directory: "ttgit/actions"} }]
                        }
                    ],
                },
                {
                    label: 'MyTT',
                    items: [
                        {
                            label: 'Account management',
                            items: [{ autogenerate: {directory: "mytt/account"} }]
                        },
                        {
                            label: "Using the API",
                            items: [{ autogenerate: {directory: "mytt/using-the-api"} }]
                        }
                    ]
                }
            ],
        }),
    ],
});