const mongoose = require('mongoose')
const Schema = require('mongoose').Schema

const schema = new Schema({
  name: {
    type: String,
    required: '用户名不能为空'
  }
})

schema.index({
  name: 1
}, {
  unique: '用户名重复'
})

mongoose.model('User', schema)

module.exports = schema
