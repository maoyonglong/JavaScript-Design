// base
var inherit = require('./src/base/inherit')
var mixin = require('./src/base/mixin')
var base = {
  inherit,
  mixin
}

// tool
var string = require('./src/tool/string')
var type = require('./src/tool/type')
var tool = {
  string,
  type
}

module.exports = {
  base,
  tool
}
