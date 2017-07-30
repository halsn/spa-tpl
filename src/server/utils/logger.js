const path = require('path')
const winston = require('winston')
const tsFormat = () => (new Date()).toLocaleString()
const logFile = path.resolve('./app.log')

function buildLoggerConfig (config) {
  const loggerConfig = Object.assign({}, config)
  loggerConfig.transports = []
  if (process.env.NODE_ENV === 'production') {
    loggerConfig.transports.push(new winston.transports['File'](config.transports.File))
  }
  loggerConfig.transports.push(new winston.transports['Console'](config.transports.Console))
  return loggerConfig
}

const loggerConfig = {
  transports: {
    Console: {
      level: 'debug',
      handleExceptions: true,
      humanReadableUnhandledException: true,
      json: false,
      colorize: true,
      timestamp: tsFormat
    },
    File: {
      filename: logFile,
      timestamp: tsFormat,
      json: false,
      level: 'info'
    }
  },
  exitOnError: false
}

module.exports = new winston.Logger(buildLoggerConfig(loggerConfig))
