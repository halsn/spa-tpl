const { db } = require('../utils')
const User = db.model('User')

module.exports.get = (req, res) => {
  User.find()
    .then((users) => {
      return res.json({ success: true, users })
    })
}

module.exports.del = (req, res) => {
  return res.json({ success: 'del' })
}

module.exports.put = (req, res) => {
  return res.json({ success: 'put' })
}

module.exports.post = (req, res) => {
  return res.json({ success: 'post' })
}
