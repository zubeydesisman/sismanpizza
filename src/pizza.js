export function Pizza(pizzaTop, pizzaSize) {
  this.pizzaSize = pizzaSize,
  this.pizzaTop = pizzaTop,
  this.pizzaPrice = 0
}

Pizza.prototype.calculatePrice = function() {
  if(this.pizzaSize === "6") {
    this.pizzaPrice = 4 +(2 * this.pizzaTop);
  }
  if(this.pizzaSize === "11") {
    this.pizzaPrice = 6 + (2*this.pizzaTop);
}
  if(this.pizzaSize === "14") {
    this.pizzaPrice = 8 +(2*this.pizzaTop);
  }
}
