const fs = require('fs')
const path = require('path')
const file = path.join(__dirname, '../../data/users.json')

const byId = {}
const byEmail = {}
let lastId = 0

class User {
  constructor ({ email, password }) {
    this.id = (++lastId).toString()
    this.email = email
    this.password = password
    byEmail[email] = this
    byId[email] = this
  }

  static add (data) {
    const user = new User(data)
    User.writeAll()
    return user
  }

  static getByEmail (email) {
    return byEmail[email]
  }

  static getById (id) {
    return byId[id]
  }

  static writeAll () {
    const json = JSON.stringify(Object.values(byId), null, 2)
    fs.writeFile(file, json, () => {})
  }
}

require(file).forEach(data => new User(data))

module.exports = User