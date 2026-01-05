export default defineNuxtConfig({
  modules: ['@nuxt/ui'],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Ground Floor Government - Local Government Careers Podcast',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'A podcast featuring city and county clerks, IT leads, communication pros, and public servants discussing local government careers, meeting preparation, technology transitions, and transparency work.'
        },
        { property: 'og:title', content: 'Ground Floor Government Podcast' },
        { property: 'og:description', content: 'Stories from the behind-the-scenes professionals who keep local government operational.' },
        { property: 'og:image', content: '/og-image.jpg' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-L1N6ELNEC6',
          async: true
        },
        {
          innerHTML: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-L1N6ELNEC6');`
        }
      ]
    }
  },

  nitro: {
    preset: 'static'
  },

  compatibilityDate: '2025-01-04'
})
