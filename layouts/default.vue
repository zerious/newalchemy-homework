<template lang="pug">
  v-app
    section.head
      h1 Simple Storage Server
    section.nav
      a.nav(href="/") Home
      a.nav(href="/register") Register
    section.body
      nuxt
</template>

<style lang="stylus">
html
  font normal 16px Roboto, "Helvetica Neue", Arial
  font-size 16px
  word-spacing 1px
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased

*
  box-sizing border-box
  margin 0

section
  padding 8px 16px

section.head
  background #666
  color #fff

section.nav
  padding 0 8px
  background #fa1

a.nav
  display inline-block
  padding 4px 8px
  color #fff
  font bold 18px
  text-decoration none

a.nav:hover
  background #f80
</style>
