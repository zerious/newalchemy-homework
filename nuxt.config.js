const externals = require('webpack-node-externals')

exports.head = {
  title: 'newalchemy-homework',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'Simple Storage Server' }
  ],
  link: [
    { rel: 'icon', href: '/icon.png' }
  ]
}

exports.plugins = [
  '~/plugins/vuetify'
]

exports.build = {
  extend(config, { isDev, isClient, isServer }) {
    if (isDev && isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      })
    }
    if (isServer) {
      config.externals = [
        externals({
          whitelist: [/^vuetify/]
        })
      ]
    }
  }
}
