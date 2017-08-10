const { API_HOST, API_PORT, DB_URI } = process.env

module.exports = {
  web: {
    domain: 'localhost',
    port: 5000
  },
  api: {
    domain: API_HOST || 'localhost',
    port: API_PORT || 6000
  },
  db: {
    URI: DB_URI || 'mongodb://localhost:27017'
  }
}
