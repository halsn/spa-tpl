const mongoose = require('mongoose')
const path = require('path')
const uniqueValidater = require('mongoose-unique-validator')
const fs = require('fs')

const { logger } = require('./')
const { db } = require('../config')

const { URI } = db

mongoose.connect(URI, () => {
  logger.info()
})

const schemaFiles = fs.readdirSync(path.resolve('shema'))
// 加载model以及注册插件
modelFiles.forEach(file => {
  const schema = require(path.resolve(file))
  schema.plugin(uniqueValidater)
})

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
