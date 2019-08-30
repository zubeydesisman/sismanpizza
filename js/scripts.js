// Business Logic for Pizza -------
function Pizza(pizzasize, pizzatop,) {
  this.pizzaSize = pizzasize,
  this.pizzaTop = pizzatop,
  this.pizzaPrice = 90
}



Pizza.prototype.calPrice = function() {
  if(this.pizzaSize === "6" && this.pizzaTop === "1") {
    this.pizzaPrice = 4;
  } else if(this.pizzaSize === "6" && this.pizzaTop === "2") {
    this.pizzaPrice = 6;
  } else if(this.pizzaSize === "6" &&  this.pizzaTop === "3"){
    this.pizzaPrice = 8;
  } else if(this.pizzaSize === "6" &&  this.pizzaTop === "4"){
    this.pizzaPrice = 10;
    console.log(pizzaPrice);
  }
}


//user interface logic-----
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var checkedPizzaTop = $(":checkbox:checked").length;
    var checkedPizzaSize = parseInt($("input:radio[name=size]:checked").val());

    console.log(checkedPizzaSize);
    console.log(checkedPizzaTop);
    var newPizza = new Pizza(checkedPizzaTop, checkedPizzaSize);
    newPizza.calPrice();
    console.log(newPizza.pizzaPrice);


    var finalPrice = newPizza.pizzaPrice;
    $(".finalprice").text(finalPrice);
    $("#result-price").show();


  })
})
