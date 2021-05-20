const { Logger } = require('../configuration')

function unhandledException (error, request, response, next) {
  Logger.error(`Error: ${error.message}. Stack trace: ${error.stack}`)
  const statusCode = error.status || 500
  return response.status(statusCode).json({ error: error.message, status: statusCode })
}

module.exports = unhandledException
