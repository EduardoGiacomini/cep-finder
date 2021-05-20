const mongoose = require('mongoose')
const Logger = require('../Logger')

class Database {
  constructor (name, url) {
    this.name = name
    this.url = url
  }

  async connect () {
    const completeURL = `${this.url}/${this.name}`
    await mongoose.connect(completeURL, { useNewUrlParser: true, useUnifiedTopology: true })
    Logger.info('Database connected.')
  }
}

module.exports = Database
