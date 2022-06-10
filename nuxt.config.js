export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    prefetchPayloads: true,
    base: '/swskillsimu/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SoulWorker - Skill Simulator',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'SoulWorker - Skill Simulator' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/4dd0de6c05.js',
        crossorigin: 'anonymous'
      }
    ],
    bodyAttrs: {
      class: 'bg-fixed bg-cover bg-center bg-no-repeat bg-[url("~/assets/img/background.png")]'
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },

  // i18n Internationalization
  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.js' },
      { code: 'ja', name: '日本語', file: 'ja.js' },
      { code: 'ko', name: '한글', file: 'ko.js' },
      { code: 'zh', name: '官话', file: 'zh.js' }
    ],
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: '_i18n',
      redirectOn: 'root'
    }
  }
}
