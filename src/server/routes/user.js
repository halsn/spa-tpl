module.exports.get = (req, res) => {
  return res.json({ success: true, name: 'foo', list: [1, 2, 3, 4, 5] })
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
