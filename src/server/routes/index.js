const mainRouter = require('express').Router()

mainRouter
  .route('/user')
  .get((req, res) => {
    return res.json({ user: 'foo' })
  })

module.exports = {
  mainRouter
}
