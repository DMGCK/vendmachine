

export class Buyable {
  constructor(name, price, img) {
    this.name = name
    this.price = price
    this.img = img
    this.stock = 10
  }

  get Template() {
    return `        
    <div class="col-md-4 position-relative my-2 ">
    <div class="p-2 text-center bg-dark text-light rounded shadow mx-1 itemcard">
      <h3 id="item-name">${this.name}</h3>
      <img id="item-img" class="img-fluid rounded p-1" src="${this.img}" alt="">
      <h4 id="price" onclick="app.buyablesController.buyItem('${this.name}')" class="btn btn-outline-danger btn-light">${this.price}, ${this.stock} in stock</h4>
    </div>
  </div>`
  }
}