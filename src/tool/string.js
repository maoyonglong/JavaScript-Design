/**
 * 字符串首字母大写
 * @function
 * @param { string } str 待处理字符串 the string to be changed
 * @return { string } 处理后的字符串 a new string of result
 * @example
 * capitalize('capital') => 'Capital'
 */
function capitalize (str) {
  return str.substr(0, 1).toUpperCase() + str.substring(1)
}

module.exports = {
  capitalize
}
