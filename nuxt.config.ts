import { Configuration } from '@nuxt/types';
const config: Configuration = {
  css: ['swiper/dist/css/swiper.css'],

  plugins: [{ src: '~plugins/vue-awesome-swiper', ssr: false }],
};
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - side-project',
    title: 'side-project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~assets/scss/mixin.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~plugins/global-components.ts' },
    { src: '~plugins/plugins.ts' },
    { src: '~plugins/fontAwesome.ts' },
    { src: '~plugins/swiper.js' },
    { src: '~plugins/filters.js' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: 'localhost:3000',
    proxyHeaders: false,
    credentials: false,
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
};
