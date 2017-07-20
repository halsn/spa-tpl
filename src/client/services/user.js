import { request } from '../utils'

function getUser (params) {
  return request('/api/user', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    params
  })
}

export default {
  getUser
}
