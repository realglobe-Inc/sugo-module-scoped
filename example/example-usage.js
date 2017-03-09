'use strict'

const { scoped } = require('sugo-module-scope')
const sugoHub = require('sugo-hub')

// Define module with dynamic scope variables
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

hub.listen(3000)
