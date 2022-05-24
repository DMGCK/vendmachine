import { ProxyState } from "../AppState.js";
import { buyablesService } from "../Services/BuyablesService.js";

function _drawItems() {
  let items = ProxyState.buyableItems
  let template = ''
  // console.log(items); 
  items.forEach(i => template += i.Template)
  document.getElementById('vendor').innerHTML = template;
  document.getElementById('money').innerText = ProxyState.money
  
}

export class BuyablesController {
  constructor() {
    // console.log("hey it's starting to work!"); 
    ProxyState.on('money', _drawItems)
    _drawItems()
  }

  buyItem(item) {
    // console.log('attempting to buy', item); 
    buyablesService.buyItem(item);
  }


}