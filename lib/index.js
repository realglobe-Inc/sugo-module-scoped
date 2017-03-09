/**
 * Scoped module for SUGOS
 * @module sugo-module-scoped
 */

'use strict'

const create = require('./create')
const scoped = require('./scoped')

let lib = scoped.bind(this)

Object.assign(lib, scoped, {
  create,
  scoped
})

module.exports = lib
