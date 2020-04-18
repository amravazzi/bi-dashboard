module.exports = {
  getError: function (response) {
    return response.body['error']
      ? response.body.message
      : response.statusText
  },
  moneyFormat: function (number) {
    var n = number
    var c = 2
    var d = ','
    var t = '.'
    var s = n < 0 ? '-' : ''
    var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + ''
    var j = (j = i.length) > 3 ? j % 3 : 0
    return s + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '')
  },
  inArray: function (needle, haystack, argStrict) {
    var key = ''
    var strict = !!argStrict
    if (strict) {
      for (key in haystack) {
        if (haystack[key] === needle) {
          return true
        }
      }
    } else {
      for (key in haystack) {
        if (haystack[key] == needle) { // eslint-disable-line eqeqeq
          return true
        }
      }
    }
    return false
  }
}
