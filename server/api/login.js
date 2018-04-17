const { api } = require('../server')

api.get('/login', (req, res) => {
  res.end('OK')
})