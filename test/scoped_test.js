/**
 * Test case for scoped.
 * Runs with mocha.
 */
'use strict'

const scoped = require('../lib/scoped.js')
const {equal, throws, deepEqual} = require('assert')
const co = require('co')

describe('scoped', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Scoped', async () => {
    const greeting = scoped((self) => ({
      sayHey (message) {
        return `Hey, I am ${self.name}, ${message}`
      },
      tryToRewriteSelf () {
        self.name = 'foo' // Invalid inject
      }
    }))
    const hey = greeting.sayHey({name: 'John'}, 'nice to meet you')
    equal(hey, 'Hey, I am John, nice to meet you')

    throws(() => greeting.tryToRewriteSelf({name: 'John'}))
  })

  it('Use defaults', async () => {
    const v = scoped((a1 = 'x', a2 = 'y') => ({
      all: (...v) => [a1, a2, ...v]
    }))
    deepEqual(v.all('z'), ['x', 'y', 'z'])
  })

  it('Nested scope', async () => {
    const module = scoped((app, client) => ({
      doSomething (v1) {
        return [app.name, client.name, v1]
      }
    }))
    deepEqual(
      module.doSomething({name: 'a1'}, {name: 'c1'}, 'hoge'),
      ['a1', 'c1', 'hoge']
    )

  })
})

/* global describe, before, after, it */
