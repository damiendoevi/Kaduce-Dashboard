// import ApiService from './api.services'

class AuthenticationError extends Error {
  constructor(errorCode, message) {
    super(message)
    this.name = this.constructor.name
    this.message = message
    this.errorCode = errorCode
  }
}

const AuthenticationService = {
  /**
   * Login the user and store the access token to TokenService.
   *
   * @returns token
   * @throws AuthenticationError
   **/
  /**
  make request to login with api
  exemple for request we can make and that use api.service
  **/
  // async login(email, password) {
  //   const requestData = {
  //     email,
  //     password
  //   }
  //   try {
  //     const response = await ApiService.post('/api/login', requestData)
  //     // TokenService.saveToken(response.data.token)
  //     // TokenService.saveRefreshToken(response.data.accessToken)
  //     // ApiService.setHeader()
  //     // ApiService.mount401Interceptor();
  //     return response.data
  //   } catch (error) {
  //     throw new AuthenticationError(error.response.status, error.response.data.detail)
  //   }
  // },
  /**
  make request to register  with api
  exemple for request we can make and that use api.service
  **/
  // /**
  //  * Register the user and store the cookie.
  //  *
  //  * @returns token
  //  * @throws AuthenticationError
  //  **/
  // async register(form) {
  //   const requestData = form
  //   try {
  //     const response = await ApiService.post('/api/auth/register', requestData)
  //     // TokenService.saveToken(response.data.token)
  //     // TokenService.saveRefreshToken(response.data.accessToken)
  //     // ApiService.setHeader()
  //     // ApiService.mount401Interceptor();
  //     return response.data
  //   } catch (error) {
  //     throw new AuthenticationError(error.response.status, error.response.data.detail)
  //   }
  // },
  /**
   * Fetch the user and store.
   *
   * @returns access_token
   * @throws AuthenticationError
   **/
  /**
  make request to register  with api
  exemple for request we can make and that use api.service
  **/
  // async getProfile() {
  //   const response = await ApiService.get('/api/profile')
  //   return response.data
  // },
  // /**
  //  * Logout the current user by removing the token from storage.
  //  *
  //  * Will also remove `Authorization Bearer <token>` header from future requests.
  //  **/
  // logout() {
  //   // Remove the token and remove Authorization header from Api Service as well
  //   // TokenService.removeToken()
  //   // TokenService.removeRefreshToken()
  //   // ApiService.removeHeader()
  //   // NOTE: Again, we'll cover the 401 Interceptor a bit later.
  //   // ApiService.unmount401Interceptor()
  // }
}

export default AuthenticationService

export { AuthenticationService, AuthenticationError }
