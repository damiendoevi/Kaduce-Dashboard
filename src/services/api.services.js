import axios from 'axios'
import NProgress from 'nprogress'
import TokenService from './storage.service'
axios.interceptors.request.use((config) => {
  NProgress.start()
  return config
})

// before a response is returned stop nprogress
axios.interceptors.response.use((response) => {
  NProgress.done()
  return response
})

const ApiService = {
  // Stores the 401 interceptor position so that it can be later ejected when needed
  _401interceptor: null,

  async init(baseURL) {
    axios.defaults.baseURL = baseURL
    axios.defaults.headers.common['Content-Type'] = 'application/json'
    axios.defaults.withCredentials = true

    this.mount401Interceptor()
  },

  setHeader() {
    axios.defaults.headers.common.Authorization = `Bearer ${TokenService.getToken()}`
    axios.defaults.headers.common['Content-Type'] = 'application/json'
  },

  removeHeader() {
    axios.defaults.headers.common = {}
  },

  query(resource, params) {
    return axios.get(resource, params).catch((error) => {
      throw new Error(`[Kaduce] ApiService ${error}`)
    })
  },

  async get(resource) {
    return axios.get(resource)
  },

  post(resource, data) {
    return axios.post(resource, data)
  },

  update(resource, id, params) {
    return axios.put(`${resource}/${id}`, params)
  },

  put(resource, data) {
    return axios.put(resource, data)
  },

  delete(resource) {
    return axios.delete(resource)
  },

  /**
   * Perform a custom Axios request.
   *
   * data is an object containing the following properties:
   *  - method
   *  - url
   *  - data ... request payload
   *  - auth (optional)
   *    - username
   *    - password
   **/
  customRequest(data) {
    return axios(data)
  },

  mount401Interceptor() {
    this._401interceptor = axios.interceptors.response.use(
      (response) => {
        return response
      },
      async (error) => {
        if (error.response.status === 401 || error.response.status === 419) {
          //use anover route if login route is other
          this.$router.push('/login')
        }

        // If error was not 401 just reject as is
        throw error
      }
    )
  },

  unmount401Interceptor() {
    // Eject the interceptor
    axios.interceptors.response.eject(this._401interceptor)
  }
}

export default ApiService
