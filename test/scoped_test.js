/**
 * Test case for scoped.
 * Runs with mocha.
 */
'use strict'

const scoped = require('../lib/scoped.js')
const { equal, throws } = require('assert')
const co = require('co')

describe('scoped', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Scoped', () => co(function * () {
    let greeting = scoped((self) => ({
      sayHey (message) {
        return `Hey, I am ${self.name}, ${message}`
      },
      tryToRewriteSelf () {
        self.name = 'foo' // Invalid inject
      }
    }))
    let hey = greeting.sayHey({ name: 'John' }, 'nice to meet you')
    equal(hey, 'Hey, I am John, nice to meet you')

    throws(() => greeting.tryToRewriteSelf({ name: 'John' }))
  }))
})

/* global describe, before, after, it */
