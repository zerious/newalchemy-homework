<template lang="pug">
v-container
  h2 Register
  v-card
    v-card-text
      v-form(@submit="register")
        p.error-message(v-if="form.error") {{form.error}}
        v-text-field(label="Email" v-model="form.email" @input="change")
        v-text-field(label="Password" v-model="form.password" type="password" @input="change")
        v-btn(type="submit" color="primary") Register
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import { store } from '~/plugins/vuex'

export default {
  data () {
    return {
      form: {
        email: store.state.session.email,
        error: ''
      }
    }
  },
  methods: {
    change (event) {
      Vue.delete(this.form, 'error')
    },
    register (event) {
      event.preventDefault()
      const { email, password } = this.form
      const data = { email, password }
      axios.post('/api/v1/register', data).then(({ data }) => {
        const error = data.error
        if (error) {
          Vue.set(this.form, 'error', error)
        } else {
          console.log('OK')
        }
      })
    }
  }
}
</script>
