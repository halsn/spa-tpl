const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const compression = require('compression')
const path = require('path')

const { logger } = require('./utils')
const { api } = require('./config')
const { mainRouter } = require('./routes')

const app = express()
const { port } = api

app.use(compression())

logger.stream = {
  write: function (message, encoding) {
    logger.info(message)
  }
}

app.use(morgan('combined', { stream: logger.stream }))
app.use(express.static(path.resolve('./dist')))

app.use(bodyParser.json({ limit: 100000000 }))
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/', mainRouter)

// global error handler

app.use((error, req, res, next) => {
  logger.error(error.stack)
  const statusCode = error.statusCode || 500
  const err = {
    error: statusCode,
    message: error.message
  }
  if (!res.headersSent) {
    res.status(statusCode).send(err)
  }
  next()
})

app.listen(port, () => {
  logger.info(`API server is running on http://localhost:${port}`)
})

process.on('unhandledRejection', (reason) => {
  logger.error('Reason: ', reason)
})

module.exports = app
