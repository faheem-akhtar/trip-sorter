/*
 * @project   Trip Sorter
 * @author    Faheem Akhtar <faheempiscean@gmail.com>
 *
*/
import axios from 'axios'
import pick from 'lodash/pick'

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

api.interceptors.response.use(function(response) {
  return pick(response, ['data', 'status', 'statusText']);
}, function (error) {
    return Promise.reject(error);
});

class BaseModel {
  constructor(options = {}) {
    this.options = {
      uri: '',
      name: ''
    }
    Object.assign(this.options, options)
    if (!this.options.name) {
      throw new Error('Model name is missing')
    }
  }
  get(segments = [], data = {}) {
    let { uri } = this.options
    if (!Array.isArray(segments)) {
      data = segments
      segments = []
    }
    uri = segments.length ? `${uri}/${segments.join('/')}` : uri

    return api.get(uri, { params: data }).then(data => {
      return data
    })
  }
}

export default BaseModel
