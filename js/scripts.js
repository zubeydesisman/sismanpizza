function Pizza(pizzatop, pizzasize) {
  this.pizzasize = pizzasize,
  this.pizzaprice = 5

}
// Pizza.prototype.calprice = function(checkedpizzatop, checkedpizzasize) {
//  pizzatop.forEach(function(pizzatop){
//    this.pizzaprice = pizzatop + 2;
// }





$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var pizzatop = [];
    var checkedpizzasize = $("input:radio[name=size]:checked").val();
    console.log(checkedpizzasize);
    $("input:checkbox[name=toppings]:checked").each(function(){
      var checkedpizzatop= $(this).val();
      pizzatop.push(checkedpizzatop);
    });
    console.log(pizzatop);
  })
})







//if (pizzatop[0] > 4 && questions[1] <= 2 && questions[2] > 4) {
//})
//})
