const express = require('express')
const proxy = require('http-proxy-middleware')
const morgan = require('morgan')
const compression = require('compression')
const path = require('path')

const { logger } = require('./utils')
const { web, api: apiServer } = require('./config')
const app = express()
const { port, domain } = web
const { port: apiPort, domain: apiDomain } = apiServer

app.use(compression())

logger.stream = {
  write: function (message, encoding) {
    logger.info(message)
  }
}

app.use(morgan('combined', { stream: logger.stream }))
app.use(express.static(path.resolve('./dist')))
app.use('/api', proxy({ target: `http://${apiDomain}:${apiPort}`, changeOrigin: true }))

app.get('*', (req, res) => {
  res.sendFile(path.resolve('./dist/index.html'))
})

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
  logger.info(`Web server is running on http://${domain}:${port}`)
})

module.exports = app
