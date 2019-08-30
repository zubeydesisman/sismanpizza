function Pizza(pizzatop, pizzasize) {
  this.pizzasize = pizzasize,
  this.pizzaprice = 0,
 this.pizzatop = pizzatop
}


   Pizza.prototype.calprice = function() {
   if(this.pizzasize === "6" && this.pizzatop === "1") {
    this.pizzaprice = 4;
    }
}



$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
  var checkedpizzatop = $(":checkbox:checked").length;
  var checkedpizzasize = parseInt($("input:radio[name=size]:checked").val());
    console.log(checkedpizzasize);
    console.log(checkedpizzatop);
      var newPizza = new Pizza(checkedpizzatop, checkedpizzasize);
      newPizza.calprice();
      console.log(newPizza.pizzaprice);


      var finalPrice = newPizza.pizzaprice;
          $(".finalprice").text(finalPrice);
          $("#result-price").show();


  })
})
