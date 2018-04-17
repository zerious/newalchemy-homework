const fs = require('fs')
const path = require('path')
const file = path.join(__dirname, '../../data/sessions.json')
const md5 = require('../lib/md5')
const salt = process.env.SESSION_SALT || ''

const byToken = {}
const byUserId = {}
let lastToken = 0

class Session {
  constructor ({ userId }) {
    this.created = Date.now()
    this.token = md5(`${userId}${this.created}${salt}`)
    this.userId = userId
    byToken[userId] = this
    byUserId[userId] = this
  }

  static add (data) {
    const session = new Session(data)
    Session.writeAll()
    return session
  }

  static getByToken (token) {
    return byToken[token]
  }

  static getByUserId (userId) {
    return byUserId[userId]
  }

  static writeAll () {
    const json = JSON.stringify(Object.values(byToken), null, 2)
    fs.writeFile(file, json, () => {})
  }
}

require(file).forEach(data => new Session(data))

module.exports = Session