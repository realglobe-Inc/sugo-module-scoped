/**
 * Test case for scoped.
 * Runs with mocha.
 */
'use strict'

const scoped = require('../lib/scoped.js')
const { equal } = require('assert')
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
      }
    }))
    let hey = greeting.sayHey({ name: 'John' }, 'nice to meet you')
    equal(hey, 'Hey, I am John, nice to meet you')
  }))
})

/* global describe, before, after, it */
