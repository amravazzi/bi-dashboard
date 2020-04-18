import Vue from 'vue'
import router from './router'
import store from './store'

const API_URL = '../static'

// const LOGIN_URL = `${API_URL}/login`
const LOGIN_URL = `${API_URL}/mock.json`
// const REFRESH_TOKEN_URL = `${API_URL}/refresh`
const REFRESH_TOKEN_URL = `${API_URL}/mock.json`

const AUTH_BASIC_HEADERS = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  },
  emulateJSON: true
}

export default {
  install (Vue, options) {
    Vue.http.interceptors.push((request, next) => {
      const accessToken = store.state.auth.accessToken
      const hasAuthHeader = request.headers.has('Authorization')

      if (accessToken && !hasAuthHeader) {
        this.setAuthHeader(request)

        if (request.url === REFRESH_TOKEN_URL) {
          this.setRefreshAuthHeader(request)
        }
      }

      next((response) => {
        if (this._isExpiredToken(response)) {
          return this._refreshToken(request)
        }
        if (this._isInvalidToken(response)) {
          store.commit('CLEAR_ALL_DATA')
          router.push({ name: 'Login', params: { error: response }})
        }
      })
    })

    Vue.prototype.$auth = Vue.auth = this
  },

  login (creds, redirect) {
    const params = { 'email_address': creds.emailAddress, 'password': creds.password }

    // replace 'get' for a 'post' for production
    return Vue.http.get(LOGIN_URL, params, AUTH_BASIC_HEADERS)
      .then((response) => {
        this._storeToken(response.data)

        if (localStorage.getItem('faturamentoFilter') === null) {
          localStorage.setItem('faturamentoFilter', JSON.stringify({
            name: 'Líquido',
            value: 'net_billing'
          }))
        }

        if (localStorage.getItem('operacaoFilter') === null) {
          localStorage.setItem('operacaoFilter', JSON.stringify({
            name: 'Todas',
            value: 'all'
          }))
        }

        if (localStorage.getItem('periodoFilter') === null) {
          localStorage.setItem('periodoFilter', JSON.stringify({
            name: 'Este mês',
            value: 'current_month'
          }))
        }

        if (localStorage.getItem('branchFilter') === null) {
          localStorage.setItem('branchFilter', JSON.stringify([store.state.auth.branch[0]]))
        }

        if (redirect) {
          // if (response.body.scopes.branch instanceof Object) {
          //   if (response.body.scopes.branch.length > 1) {
          //     router.push({ name: redirect }) // TODO: Replace redirect to 'StoreSelection'
          //   } else {
          //     router.push({ name: redirect })
          //   }
          // } else {
          router.push({ name: redirect })
          // }
        }

        return response
      })
      .catch((errorResponse) => {
        console.log(errorResponse)
        return errorResponse
      })
  },

  logout () {
    store.commit('CLEAR_ALL_DATA')
    localStorage.clear()
    router.push({ name: 'Login' })
  },

  setAuthHeader (request) {
    request.headers.set('Authorization', 'Bearer ' + store.state.auth.accessToken)
  },

  setRefreshAuthHeader (request) {
    request.headers.set('Authorization', 'Bearer ' + store.state.auth.refreshToken)
  },

  _retry (request) {
    this.setAuthHeader(request)

    return Vue.http(request)
      .then((response) => {
        return response
      })
      .catch((response) => {
        return response
      })
  },

  _refreshToken (request) {
    this.setRefreshAuthHeader(request)

    return Vue.http.get(REFRESH_TOKEN_URL)
      .then((result) => {
        this._storeToken(result)
        return this._retry(request)
      })
      .catch((errorResponse) => {
        if (this._isInvalidToken(errorResponse)) {
          this.logout()
        }
        return errorResponse
      })
  },

  _storeToken (response) {
    const auth = store.state.auth

    console.log(response)

    auth.isLoggedIn = true
    auth.accessToken = response.body.token
    auth.refreshToken = response.body.refresh_token
    auth.accessList = response.body.scopes.access_list
    auth.branch = response.body.scopes.branch

    store.commit('UPDATE_AUTH', auth)
  },

  _isExpiredToken (response) {
    const status = response.status
    const error = response.data.error

    return (status === 419 && error === true)
  },

  _isInvalidToken (response) {
    const status = response.status
    const error = response.data.error

    return (status === 401 && error === true)
  }
}
