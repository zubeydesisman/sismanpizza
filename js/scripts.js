// Business Logic for Pizza -------
function Pizza(pizzaTop, pizzaSize,) {
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
//user interface logic-----
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    //var checkedPizzaTop = $(":checkbox:checked").length; (doing same thing as next line)
    var checkedPizzaTop = $("input:checkbox[name=toppings]:checked").length;
    var  checkedPizzaSize = $("input:radio[name=size]:checked").val();

    console.log(checkedPizzaSize);
    console.log(checkedPizzaTop);
    var newPizza = new Pizza(checkedPizzaTop, checkedPizzaSize)
    console.log(newPizza);
    newPizza.calculatePrice();
    console.log("show me",newPizza.pizzaPrice);
    var finalPrice = newPizza.pizzaPrice;
    $(".finalprice").text(finalPrice);
    $("#price").show();
  })
})
