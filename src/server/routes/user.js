const { db, logger } = require('../utils')
const { getError } = db
const User = db.model('User')

module.exports.get = async (req, res) => {
  try {
    const users = await User.find().exec()
    return res.json({ success: true, userList: users })
  } catch (e) {
    logger.error(e)
    return res.json({ error: getError(e) })
  }
}

module.exports.del = (req, res) => {
  return res.json({ success: 'del' })
}

module.exports.put = (req, res) => {
  return res.json({ success: 'put' })
}

function sleep (sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve()
    }, sec * 1000)
  })
}

module.exports.post = async (req, res) => {
  const data = req.body
  try {
    await sleep(Math.floor(Math.random() * 3))
    await (new User(data)).save()
    return res.json({ success: true })
  } catch (e) {
    logger.error(e)
    return res.json({ error: getError(e) })
  }
}
