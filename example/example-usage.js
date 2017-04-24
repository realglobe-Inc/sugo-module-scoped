'use strict'

const { scoped } = require('sugo-module-scoped')
const sugoHub = require('sugo-hub')
const sugoActor = require('sugo-actor')

// Define module with dynamic scope variables
const fruitShop = scoped((session) => ({
  buy (product, amount) {
    let ordererId = session.who
    /* ... */
  }
}))

let hub = sugoHub({
  localActors: {
    shoppingMall: sugoActor({
      modules: {
        fruitShop
      }
    })
  }
})

hub.listen(3000)
