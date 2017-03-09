/**
 * Bind scope variables to scoped object
 * @function bound
 * @param {Module} scopedModule - Scoped module
 * @param {...Object} scope - Scope to bind
 * @returns {Module} Bound module
 */
'use strict'

const { Module } = require('sugo-module-base')

/** @lends bound */
function bound (scopedModule, ...scopes) {
  let boundMethods = Object.keys(scopedModule)
    .filter((name) => !/^\$/.test(name))
    .reduce((boundMethods, name) => Object.assign(boundMethods, {
      [name]: function boundWrap (...params) {
        return scopedModule[ name ].call(this, ...scopes, ...params)
      }
    }), {})
  return new Module(boundMethods)
}

module.exports = bound
