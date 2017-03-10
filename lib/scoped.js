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
    length = creator.length
  } = options
  let methods = creator()
  let scopedMethods = Object.keys(methods).reduce((scopedMethods, name) => Object.assign(scopedMethods, {
    [name]: function scopeWrap (...invokeArgs) {
      let scopes = invokeArgs.slice(0, length).map(Object.freeze)
      let params = invokeArgs.slice(length)
      return creator(...scopes)[ name ].call(this, ...params)
    }
  }), {})
  return new Module(scopedMethods)
}

module.exports = scoped
