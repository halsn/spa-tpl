import fetch from 'axios'

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

export const axios = fetch

export async function request (url, options) {
  const response = await fetch(url, options)

  checkStatus(response)

  const data = await response.data

  const ret = {
    data,
    headers: {}
  }

  if (response.headers['x-total-count']) {
    ret.headers['x-total-count'] = response.headers['x-total-count']
  }

  return ret
}
