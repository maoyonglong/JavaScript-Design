/**
 * 类型操作命名空间
 * Type
 * @namespace
 */
var Type = {
  /**
   * 判断是否是数组类型
   * judge the object whether is Array
   * @method
   * @param { * } obj 任意类型的值 data of any type
   * @return { boolean }
   */
  isArray: function (obj) {
    return obj instanceof Array
  },
  /**
   * 判断是否是函数类型
   * judge the object whether is Function
   * @method
   * @param { * } obj 任意类型的值 data of any type
   * @return { boolean }
   */
  isFunction: function (obj) {
    return typeof obj === 'function'
  },
  /**
   * 判断是否是字符串类型
   * judge the object whether is String
   * @method
   * @param { * } obj 任意类型的值 data of any type
   * @return { boolean }
   */
  isString: function (obj) {
    return typeof obj === 'string'
  },
  /**
   * 判断是否是数值类型
   * judge the object whether is Number
   * @method
   * @param { * } obj 任意类型的值 data of any type
   * @return { boolean }
   */
  isNumber: function (obj) {
    return typeof obj === 'number'
  },
  /**
   * 判断是否是对象类型
   * judge the object whether is Object
   * @method
   * @param { * } obj 任意类型的值 data of any type
   * @return { boolean }
   */
  isObject: function (obj) {
    return typeof obj === 'object' && !this.isArray(obj)
  },
  /**
   * 判断是否是NaN类型
   * judge the object whether is NaN
   * @method
   * @param { * } obj 任意类型的值 data of any type
   * @return { boolean }
   */
  isNan: function (obj) {
    return Number.isNaN(obj)
  },
  /**
   * 判断是否是null类型
   * judge the object whether is null
   * @method
   * @param { * } obj data of any type
   * @return { boolean }
   */
  isNull: function (obj) {
    return obj === null
  },
  /**
   * 判断是否是undefined类型
   * judge the object whether is undefined
   * @method
   * @param { * } obj 任意类型的值 data of any type
   * @return { boolean }
   */
  isUndefined: function (obj) {
    return obj === undefined
  },
  /**
   * 判断是否是布尔类型
   * judge the object whether is boolean
   * @method
   * @param { * } obj 任意类型的值 data of any type
   * @return { boolean }
   */
  isBoolean: function (obj) {
    return obj instanceof Boolean
  },
  /**
   * 判断是否是真值类型
   * judge the object whether is truthy
   * @method
   * @param { * } obj 任意类型的值 data of any type
   * @return { boolean }
   */
  isTruthy: function (obj) {
    return !this.isFalsy(obj)
  },
  /**
   * 判断是否是假值类型
   * judge the object whether is falsy
   * @method
   * @param { * } obj 任意类型的值 data of any type
   * @return { boolean }
   */
  isFalsy: function (obj) {
    return obj === false || obj === null || obj === undefined || obj === '' || obj === 0 || this.isNan(obj)
  },
  /**
   * 判断对象是否是某一数据类型
   * judge the type of object whether is equal to the accepted of the first param
   * @method
   * @param { string } type 所判断的类型 the type want to judge
   * @param { * } obj 待判定对象 the object to be judged
   * @return { boolean } 判断结果 Judgement result
   * @example
   * is('string', '') // true
   * is('object', {}) // true
   * is('array', []) // true
   * is('function', function(){}) // true
   * is('number', 12) // true
   * is('nan', NaN) // true
   * is('undefined', undefined) // true
   * is('null', null) // true
   */
  is: function (type, obj) {
    type = type.capitalize()
    var method = this['is' + type]
    if (method) {
      return method.call(this, obj)
    }
  }
}

module.exports = Type
