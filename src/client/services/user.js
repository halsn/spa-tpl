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

function addToUsers (data) {
  return request('/api/user', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data
  })
}

export default {
  getUser,
  addToUsers
}
