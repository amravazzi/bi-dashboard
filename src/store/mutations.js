export const UPDATE_AUTH = (state, auth) => {
  state.auth = auth
}

export const CLEAR_ALL_DATA = (state) => {
  state.auth.isLoggedIn = false
  state.auth.accessToken = null
  state.auth.refreshToken = null
  state.auth.branch = null
  state.auth.accessList = null
}
