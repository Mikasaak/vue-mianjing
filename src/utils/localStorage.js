const token = 'vant-mobile-exp-token'

export const setToken = (newToken) => {
  localStorage.setItem(token, newToken)
}
export const getToken = () => {
  return localStorage.getItem(token)
}

export const delToken = () => {
  localStorage.removeItem(token)
}
