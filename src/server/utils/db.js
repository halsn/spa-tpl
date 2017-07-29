const mongoose = require('mongoose')
const uniqueValidater = require('mongoose-unique-validator')
const Promise = require('bluebird')

const { logger } = require('./')
const { db } = require('../config')
const models = require('../models')

const { URI } = db

mongoose.Promise = Promise
mongoose.connect(URI, () => {
  logger.info('DB connected')
})

Object.keys(models).forEach(model => models[model].plugin(uniqueValidater))

module.exports = mongoose

module.exports.getError = (err) => {
  var message = ''

  if (err.error) {
    message = err.error
  } else if (err.message && !err.errors) {
    message = err.message
  } else {
    for (const errName in err.errors) {
      if (err.errors[errName].message) {
        message = err.errors[errName].message
        break
      }
    }
  }

  return message
}
