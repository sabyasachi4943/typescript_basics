"use strict";
console.log("Hey there the TypeScript!");
var pizzas = [{ name: "Pepperoni", toppings: ["pepperoni"] }];
var mappedPizzas = pizzas.map(function (pizza) { return pizza.name.toUpperCase(); });
console.log(mappedPizzas);
// const pizza = {
//   name: 'Blazing Inferno',
//   getName: function () {
//     console.log(this.name);
//   },
// }
// console.log(pizza.getName())
// default parameters
function multiply(a, b) {
    if (b === void 0) { b = 35; }
    return a * b;
}
console.log(multiply(5));
console.log(multiply(5, 25));
// es6 shorthand
// const pizza = {
//   name: "Pepperoni",
//   price: 15,
//   // getName: function () {
//   //   return this.name;
//   // }
//   getName() {
//     return this.name;
//   },
// };
// console.log(pizza.getName());
// const toppings = ['pepperoni']
// const order = { pizza, toppings }
// console.log(order);
// function createOrder(pizza, toppings) {
//   return {pizza, toppings}
// }
// console.log(createOrder(pizza, toppings))
// rest parameter
// function sumAll(arr) {
//   return arr.reduce((prev, next) => prev + next)
// }
// const sum = sumAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// console.log(sum)
// function sumAll(message, ...arr) {
//   console.log(message)
//   console.log(arguments)
//   return arr.reduce((prev, next) => prev + next);
// }
// const sum = sumAll("Hello", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(sum);
// spread operator
// const toppings = ['bacon', 'chilli']
// const newToppings = ['pepperoni']
// const allToppings = [...toppings, ...newToppings]
// console.log(allToppings)
//
// destructure
var pizza = {
    name: "Pepperoni",
    toppings: ["pepperoni"],
};
// function order({ name, toppings }) {
//   console.log(name, toppings);
// }
function order(_a) {
    var pizzaName = _a.name, pizzaToppings = _a.toppings;
    // console.log(pizzaName, pizzaToppings);
    return { pizzaName: pizzaName, pizzaToppings: pizzaToppings };
}
order(pizza);
var pizzaName = order(pizza).pizzaName;
console.log(pizzaName);
//
// Array destructure
var toppings = ["pepperoni", "bacon", "chilli"];
var first = toppings[0], second = toppings[1], third = toppings[2];
console.log(first, second, third);
function logToppings(_a) {
    var first = _a[0], second = _a[1], third = _a[2];
    console.log(first, second, third);
}
logToppings(toppings);
//
// primitive types in typescript
var pizzaCost = 10;
var pizzaToppings = 2;
function calculatePrice(cost, toppings) {
    return cost + 1.5 * toppings;
}
var cost = calculatePrice(pizzaCost, pizzaToppings);
console.log("Pizza costs: ".concat(cost));
//
// string type
var coupon = 'pizza25';
function normalizeCoupon(code) {
    return code.toUpperCase();
}
var couponMessage = "Final coupon is ".concat(normalizeCoupon(coupon));
console.log(couponMessage);
