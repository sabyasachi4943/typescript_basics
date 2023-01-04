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
// function order({ name: pizzaName, toppings: pizzaToppings }) {
//   // console.log(pizzaName, pizzaToppings);
//   return { pizzaName, pizzaToppings };
// }
// order(pizza);
// const { pizzaName } = order(pizza);
// console.log(pizzaName);
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
var coupon = "pizza25";
function normalizeCoupon(code) {
    return code.toUpperCase();
}
var couponMessage = "Final coupon is ".concat(normalizeCoupon(coupon));
console.log(couponMessage);
// boolean type
var pizzas1 = 2;
function offerDiscount(orders) {
    return orders >= 3;
}
if (offerDiscount(pizzas1)) {
    console.log("you're entitled to a discount!");
}
else {
    console.log("order more than 3 pizzas for a discount!");
}
//
// any type
var coupon1;
coupon1 = 25;
coupon1 = "pizza24";
coupon1 = true;
// explicit & implicit
var implicitCoupon = "pizza15";
var explicitCoupon = "pizza12";
// void type
var selectedTopping = "pepperoni";
// impure function
function selectTopping(topping) {
    selectedTopping = topping;
}
selectTopping("bacon");
console.log(selectedTopping);
// //
// // never type
// function orderError(error: string): never {
//   throw new Error(error);
//   // never going to return a value
// }
// orderError('something went wrong')
//
// null type
var coupon2 = "pizza15";
function removeCoupon() {
    coupon2 = null;
}
console.log(coupon2);
removeCoupon();
console.log(coupon2);
// union type
var pizzaSize = "small";
function selectSize(size) {
    pizzaSize = size;
}
selectSize("large");
console.log("pizza size: ".concat(pizzaSize));
//
// functions
function sumOrder(price, quantity) {
    return price * quantity;
}
var sumOrder1 = function (price, quantity) {
    return price * quantity;
};
var sumOrder2;
// sumOrder2 = (price: number, quantity: number): number => {
//   return price * quantity;
// };
sumOrder2 = function (x, y) { return x * y; };
var sum = sumOrder2(25, 5);
console.log("Total sum: ".concat(sum));
//
// function with optional parameter
var sumOrder3;
sumOrder3 = function (x, y) {
    if (y) {
        return x * y;
    }
    return x;
};
var sum3 = sumOrder3(25, 5);
console.log("Total sum: ".concat(sum3));
// way to add default parameter
sumOrder3 = function (x, y) {
    if (y === void 0) { y = 1; }
    return x * y;
};
var sum4 = sumOrder3(35);
console.log("Total sum: ".concat(sum4));
//
// object signature
var pizza2 = {
    name: "Plain old Pepperoni",
    price: 20,
    getName: function () {
        return pizza2.name;
    },
};
console.log(pizza2.getName());
//
// Collections most specifically array type
// in array type the types are in front and outside of the third bracket
var sizes;
sizes = [1, 2, 3];
// generic type
var toppings2;
toppings2 = ["pepperoni", "bacon", "chilli"];
// 
// tuple type 
// in tuple type the types are inside of the third bracket
var pizza3;
pizza3 = ['pepperoni', 20, true];
var pizzaSize2 = 'small';
var selectSize2 = function (x) {
    pizzaSize = x;
};
selectSize2('medium');
var pizza4 = { name: 'Blazing Inferno', toppings: 5 };
var serialized = JSON.stringify(pizza4);
// function getNameFromJSON(obj: string) {
//   return (<Pizza3>JSON.parse(obj)).name;
// }
function getNameFromJSON(obj) {
    return JSON.parse(obj).name;
}
getNameFromJSON(serialized);
// 
// enum type
var Sizes;
(function (Sizes) {
    Sizes[Sizes["Small"] = 0] = "Small";
    Sizes[Sizes["Medium"] = 1] = "Medium";
    Sizes[Sizes["Large"] = 2] = "Large";
})(Sizes || (Sizes = {}));
(function (Sizes) {
    Sizes[Sizes["ExtraLarge"] = 3] = "ExtraLarge";
})(Sizes || (Sizes = {}));
var selectedSize = 2;
console.log(Sizes.Large, Sizes[Sizes.Large]);
console.log(Sizes[selectedSize]);
var selected = "small" /* Sizes2.Small */;
function updateSize(size) {
    selected = size;
}
updateSize("medium" /* Sizes2.Medium */);
console.log(selected);
var pizza5;
function createPizza(name, sizes) {
    return {
        name: name,
        sizes: sizes,
    };
}
pizza5 = createPizza('pepperoni', ['small', 'medium']);
console.log(pizza5);
