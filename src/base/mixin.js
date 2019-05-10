var type = require('../tool/type')

/**
 * 混合对象属性 - 将source对象的属性拷贝到target对象
 * @function
 * @param { object } target 目标对象 target
 * @param { object } source 源对象 source
 * @param { boolean } isDeep 是否深拷贝 whether deep copy @default false
 * @return { object } 混合后的对象
 * @example
 * mixin({ a: 'a' }, {b: 'b'}) => { a: 'a', b: 'b' }
 */
function mixin (target, source, isDeep) {
  isDeep = isDeep || false
  for (var property in source) {
    var curSourceVal = source[property]
    if (isDeep && type.isObject(curSourceVal)) {
      target[property] = mixin({}, curSourceVal, isDeep)
    } else {
      target[property] = curSourceVal
    }
  }
  return target
}

/**
 * 混合多个对象属性 - 将多个source对象的属性拷贝到target对象
 * @function
 * @param { object } target 目标对象 target
 * @param { array } sourceArray 源对象数组 the array of source
 * @param { boolean } isDeep 是否深拷贝 whether deep copy @default false
 * @return { object } 混合后的目标对象
 * @example
 * mixinMany({a: 'a'}, [{b: 'b'}, {c: 'c'}]) => { a: 'a', b: 'b', c: 'c' }
 */
function mixinMany (target, sourceArray, isDeep) {
  isDeep = isDeep || false
  for (var i = 0, len = sourceArray.length; i < len; i++) {
    mixin(target, sourceArray[i], isDeep)
  }
  return target
}

module.exports = {
  mixin,
  mixinMany
}
