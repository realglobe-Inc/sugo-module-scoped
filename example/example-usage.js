'use strict'

const { scoped } = require('sugo-module-scope')
const sugoHub = require('sugo-hub')

const fruitShop = scoped((session) => ({
  buy (product, amount) {
    let ordererId = session.who
    /* ... */
  }
}))

let hub = sugoHub({
  localActors: {
    shoppingMall: {
      modules: {
        fruitShop
      }
    }
  }
})
