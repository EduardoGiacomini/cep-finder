const winston = require('winston')

class Logger {
  constructor () {
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.combine(
        winston.format.json(),
        winston.format.timestamp()
      ),
      transports: [
        new winston.transports.File({
          filename: 'logs.log'
        }),
        new winston.transports.Console({
          level: 'info',
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
          )
        })
      ]
    })
  }

  info (message) {
    this.logger.info(message)
  }

  error (message) {
    this.logger.error(message)
  }

  warning (message) {
    this.logger.warning(message)
  }
}

module.exports = new Logger()
