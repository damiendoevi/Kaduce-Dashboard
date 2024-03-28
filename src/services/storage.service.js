import Cookies from 'js-cookie'
import * as CryptoJS from 'crypto-js'
const TOKEN_KEY = 'access_token'
const REFRESH_TOKEN_KEY = 'refresh_token'

/**
 * Manage the how Access Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instance.
 **/
const TokenService = {
  getToken() {
    const decryptionToken = Cookies.get(TOKEN_KEY)
    const decryptedToken = decryptionToken ? this.decryptToken(decryptionToken) : ''
    return decryptedToken
  },

  saveToken(accessToken) {
    const encryptedToken = this.encryptToken(accessToken)
    Cookies.set(TOKEN_KEY, encryptedToken, { secure: true })
  },

  removeToken() {
    Cookies.remove(TOKEN_KEY)
  },

  getRefreshToken() {
    const decryptionToken = Cookies.get(REFRESH_TOKEN_KEY)
    const decryptedToken = this.decryptToken(decryptionToken)
    return decryptedToken
  },
  encryptToken(token) {
    const secret = '403 Forbidden!'
    const encrypted = CryptoJS.AES.encrypt(token, secret).toString()
    return encrypted
  },
  decryptToken(token) {
    const secret = '403 Forbidden!'
    const decrypted = CryptoJS.AES.decrypt(token, secret).toString(CryptoJS.enc.Utf8)
    return decrypted
  }
}

export default TokenService
