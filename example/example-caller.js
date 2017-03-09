'use strict'

const sugoCaller = require('sugo-caller')
const sugoScope = require('sugo-scope')
const co = require('co')

let caller = sugoCaller({ /* ... */ })
let session = sugoScope()

co(function * () {
  let shoppingMall = yield caller.connect('shoppingMall')

  // Login and store into session scope
  session.who = yield shoppingMall.get('auth').signin('user01', 'xxx-password-01')

  // Access to module with a scope
  let fruitShop = shoppingMall.get('fruitShop').with(session)
  yield fruitShop.buy('Orange', 3)
}).catch((err) => console.error(err))
