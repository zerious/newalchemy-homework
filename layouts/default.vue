<template lang="pug">
v-app
  section.head
    h1 Simple Storage Server
  section.nav
    a.nav(href="/") Home
    a.nav(href="/register") Register
    a.nav(href="/login") Sign In
    a.nav(href="/upload") Upload
    a.nav(href="/browse") Browse
  section.body
    nuxt
</template>

<style lang="stylus">
html
  font-family Roboto, "Helvetica Neue", Arial
  font-size 16px
  font-weight 300
  word-spacing 1px
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased

h1
  font-weight 300!important

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
  font-weight 500
  text-decoration none

a.nav:hover
  background #f80

p.error-message
  background #fee
  border 1px solid #933
  border-radius 4px
  padding 8px
  margin 8px -12px

.btn
  text-transform none !important

@require '~vuetify/src/stylus/settings/_colors'

$theme := {
  primary:     $red.darken-2
  accent:      $red.accent-2
  secondary:   $grey.lighten-1
  info:        $blue.lighten-1
  warning:     $amber.darken-2
  error:       $red.accent-4
  success:     $green.lighten-2
}

@require '~vuetify/src/stylus/main'
</style>
