
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pizza } from './pizza.js';
import $ from 'jquery';
import '../style.css';

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    //var checkedPizzaTop = $(":checkbox:checked").length; (doing same thing as next line)
    var checkedPizzaTop = $("input:checkbox[name=toppings]:checked").length;
    var  checkedPizzaSize = $("input:radio[name=size]:checked").val();
    var newPizza = new Pizza(checkedPizzaTop, checkedPizzaSize);
    newPizza.calculatePrice();
    var finalPrice = newPizza.pizzaPrice;
    $(".finalprice").text(finalPrice);
    $("#price").show();
  });
});
