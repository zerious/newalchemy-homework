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

// exports.modules = [
//   '~/plugins/storage-server'
// ]

exports.build = {
  extend(config, { isDev, isClient }) {
    if (isDev && isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      })
    }
  }
}

exports.serverMiddleware = [

]