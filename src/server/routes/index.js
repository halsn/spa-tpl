const mainRouter = require('express').Router()
const User = require('./user.js')

mainRouter
  .route('/user')
  .get(User.get)
  .post(User.post)

module.exports = {
  mainRouter
}
