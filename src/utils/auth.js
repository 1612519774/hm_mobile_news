const USER_KEY = 'user'
export const getUser = () => {
//   读取到localStorage的token值
  JSON.parse(window.localStorage.getItem(USER_KEY))
}
//   设置localStorage的token值
export const setUser = (data) => {
  window.localStorage.setItem(USER_KEY,
    JSON.stringify(data))
}
//   移除remove的token值
export const removeUser = () => {
  window.localStorage.removeItem(USER_KEY)
}
