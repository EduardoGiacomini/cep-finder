const express = require('express')

class Router {
  constructor (prefix, routes) {
    this.router = express.Router()
    this.prefix = prefix
    this.routes = routes
  }

  setup () {
    for (const route of this.routes) {
      this.router.use(this.prefix, route)
    }
    return this.router
  }
}

module.exports = Router
