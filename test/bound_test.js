/**
 * Test case for bound.
 * Runs with mocha.
 */
'use strict'

const bound = require('../lib/bound.js')
const scoped = require('../lib/scoped.js')
const { equal } = require('assert')
const co = require('co')

describe('bound', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Bound', async () => {
    let greeting = scoped((self) => ({
      sayHey (message) {
        return `Hey, I am ${self.name}, ${message}`
      }
    }))
    let tomGreeting = bound(greeting, { name: 'Tom' })
    let hey = tomGreeting.sayHey('nice to meet you')
    equal(hey, 'Hey, I am Tom, nice to meet you')
  })
})

/* global describe, before, after, it */
