import { ProxyState } from "../AppState.js"
class BuyablesService {
  constructor() {

  }
  buyItem(item) {
    let attemptItem = ProxyState.buyableItems.find(i => i.name == item)
    if (attemptItem.price <= ProxyState.money && attemptItem.stock > 0) {

      attemptItem.stock -= 1;
      ProxyState.money -= attemptItem.price;
      console.log(attemptItem.name,ProxyState.money, 'bought item');

    } 
    ProxyState.money = ProxyState.money
  }
}

export const buyablesService =  new BuyablesService()