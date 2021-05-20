const express = require('express')

const { Database, Router, Logger } = require('./configuration')
const factories = require('./factories')
const { unhandledException } = require('./middlewares')

class Application {
  constructor (configuration) {
    this.app = express()
    this.configuration = configuration
  }

  async start () {
    try {
      this.applyDefaultMiddlewares()
      await this.connectDatabase()
      this.applyRoutes()
      this.applyDefaultExceptionsHandlers()
      this.startApplication()
    } catch (error) {
      Logger.error(`Error: ${error.message}. Stack trace: ${error.stack}`)
    }
  }

  applyDefaultMiddlewares () {
    this.app.use(express.json())
  }

  async connectDatabase () {
    const { name, url } = this.configuration.database
    const database = new Database(name, url)
    await database.connect()
  }

  applyRoutes () {
    const router = this.setupRoutes()
    this.app.use(router)
  }

  setupRoutes () {
    const routes = []
    for (const factoryName in factories) {
      const route = factories[factoryName].create(this.configuration)
      routes.push(route.getRoute())
    }

    const router = new Router(this.configuration.api.prefix, routes)
    return router.setup()
  }

  applyDefaultExceptionsHandlers () {
    this.app.use(unhandledException)
  }

  startApplication () {
    const { host, port } = this.configuration.api
    this.app.listen(port, host, () => {
      Logger.info(`Servidor iniciado em http://${host}:${port}.`)
    })
  }
}

module.exports = Application
