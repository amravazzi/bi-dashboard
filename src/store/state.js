export const STORAGE_KEY = 'login'

let syncedData = {
  auth: {
    isLoggedIn: false,
    accessToken: null,
    refreshToken: null,
    accessList: null,
    branch: null
  }
}

if (localStorage.getItem(STORAGE_KEY)) {
  syncedData = JSON.parse(localStorage.getItem(STORAGE_KEY))
}

export const state = Object.assign(syncedData)
