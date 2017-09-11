/**
 * Scoped module for SUGOS
 * @module sugo-module-scoped
 */

'use strict'

const bound = require('./bound')
const scoped = require('./scoped')

const lib = scoped.bind(this)

Object.assign(lib, scoped, {
  bound,
  scoped
})

module.exports = lib
