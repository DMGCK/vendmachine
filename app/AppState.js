import { Buyable } from "./Models/buyable.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  buyableItems = [
    new Buyable('Salt-E Chips', 5.00, './/assets/img/extra salty chips.jpeg'),
    new Buyable('Sweet-E Chips', 5, './/assets/img/milkchip.jpg'),
    new Buyable('Salad-E Chips', 5, './/assets/img/salad-chip.jpg'),
    new Buyable('Beet-E Chips', 5, './/assets/img/beet-chip.jpg'),
    new Buyable('Home-E Chips', 5, './/assets/img/grilled-cheese-chip.jpg'),
  ]

  money = 2000000;
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
