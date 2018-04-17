const { api } = require('../server')
const User = require('../models/user')

api.post('/register', (req, res) => {
  const { body } = req

  // Must have JSON POST data.
  if (!body) return res.send({ error: 'Missing JSON.' })

  // Must have an email and a password.
  const { email, password } = body
  if (!email || !password) return res.send({ error: 'Missing email or password.' })

  // TODO: Email and password validation.

  // Can't recreate a user whose email already exists in the DB.
  if (User.getByEmail(email)) return res.send({ error: 'User already exists.' })

  // Create a user.
  const { id } = User.add(body)
  res.send({ id, email })
})