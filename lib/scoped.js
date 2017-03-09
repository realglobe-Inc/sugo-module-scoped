/**
 * Define scoped module
 * @function scoped
 * @param {function} creator
 * @param {Object} [options={}] - Optional settings
 * @returns {Object} SUGO module
 */
'use strict'

const { Module } = require('sugo-module-base')

/** @lends scoped */
function scoped (creator, options = {}) {
  let {
    initialScope = {},
    skipModularize = false
  } = options
  let methods = creator(initialScope)
  let scopedMethods = Object.keys(methods).reduce((scoped, name) => Object.assign(scoped, {
    [name]: function scopeWrap (scope, ...params) {
      return creator(scope)[ name ].call(this, ...params)
    }
  }), {})
  if (skipModularize) {
    return scopedMethods
  } else {
    return new Module(scopedMethods)
  }
}

module.exports = scoped
