export default {
  getCookie: name => {
    const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    const arr = document.cookie.match(reg)

    if (arr) {
      return unescape(arr[2])
    } else {
      return ''
    }
  },
  setCookie(name, value) {
    const days = 30
    const expire = new Date()
    expire.setTime(expire.getTime() + days * 24 * 60 * 60 * 1000)
    document.cookie =
      name + '=' + encodeURI(value) + ';expires=' + expire.toGMTString()
  },
  deleteCookie(name) {
    const expire = new Date()
    expire.setTime(expire.getTime() - 1)
    const value = this.getCookie(name)
    if (value !== null) {
      document.cookie = name + '=' + value + ';expires=' + expire.toGMTString()
    }
  }
}
