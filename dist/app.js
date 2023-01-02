"use strict";
console.log("Hey there the TypeScript!");
var pizzas = [{ name: 'Pepperoni', toppings: ['pepperoni'] }];
var mappedPizzas = pizzas.map(function (pizza) { return pizza.name.toUpperCase(); });
console.log(mappedPizzas);
var pizza = {
    name: 'Blazing Inferno',
    getName: function () {
        console.log(this.name);
    },
};
console.log(pizza.getName());
// default parameters
function multiply(a, b) {
    if (b === void 0) { b = 35; }
    return a * b;
}
console.log(multiply(5));
console.log(multiply(5, 25));
