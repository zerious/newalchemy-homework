const { api } = require('../server')
const User = require('../models/user')
const Session = require('../models/session')

api.post('/login', (req, res) => {
  const { body } = req

  // Must have JSON POST data.
  if (!body) {
    return res.send({ error: 'Missing JSON.' })
  }

  // Must have an email and a password.
  const { email, password } = body
  if (!email || !password) {
    return res.send({ error: 'Missing email or password.' })
  }

  // User must exist in the DB, and password must match.
  const user = User.getByEmail(email)
  if (!user || user.password !== password) {
    return res.send({ error: 'Wrong email or password.' })
  }

  // Create a session.
  const session = Session.add({ userId: user.id })
  res.send({ session })
})