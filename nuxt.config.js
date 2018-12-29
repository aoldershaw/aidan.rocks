const pkg = require("./package");
const projects = require("./assets/projects.js");

module.exports = {
  mode: "spa",

  /*
   ** Headers of the page
   */
  head: {
    title: "Aidan Oldershaw | Developer Extraordinaire",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        ref: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Montserrat:400,700"
      }
    ]
  },

  generate: {
    routes: projects.map(p => `/projects/${p.id}`)
  },

  /*
   ** Customize the progress-bar color
   */
  loading: false,

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: ["nuxt-robots-module"],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
