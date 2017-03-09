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
    initialScope = {}
  } = options
  let methods = creator(initialScope)
  let scopedMethods = Object.keys(methods).reduce((scopedMethods, name) => Object.assign(scopedMethods, {
    [name]: function scopeWrap (scope, ...params) {
      return creator(scope)[ name ].call(this, ...params)
    }
  }), {})
  return new Module(scopedMethods)
}

module.exports = scoped
