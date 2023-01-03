console.log("Hey there the TypeScript!");

const pizzas = [{ name: "Pepperoni", toppings: ["pepperoni"] }];

const mappedPizzas = pizzas.map((pizza) => pizza.name.toUpperCase());

console.log(mappedPizzas);

// const pizza = {
//   name: 'Blazing Inferno',
//   getName: function () {
//     console.log(this.name);
//   },
// }

// console.log(pizza.getName())

// default parameters

function multiply(a: number, b = 35) {
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
const pizza = {
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

const toppings = ["pepperoni", "bacon", "chilli"];

const [first, second, third] = toppings;
console.log(first, second, third);

function logToppings([first, second, third]: any) {
  console.log(first, second, third);
}

logToppings(toppings);

//
// primitive types in typescript

const pizzaCost: number = 10;
const pizzaToppings: number = 2;

function calculatePrice(cost: number, toppings: number): number {
  return cost + 1.5 * toppings;
}

const cost: number = calculatePrice(pizzaCost, pizzaToppings);

console.log(`Pizza costs: ${cost}`);

//
// string type

const coupon: string = "pizza25";

function normalizeCoupon(code: string): string {
  return code.toUpperCase();
}

const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;

console.log(couponMessage);

// boolean type
const pizzas1: number = 2;

function offerDiscount(orders: number): boolean {
  return orders >= 3;
}

if (offerDiscount(pizzas1)) {
  console.log(`you're entitled to a discount!`);
} else {
  console.log(`order more than 3 pizzas for a discount!`);
}

//
// any type
let coupon1: any;

coupon1 = 25;
coupon1 = "pizza24";
coupon1 = true;

// explicit & implicit
let implicitCoupon = 'pizza15'
let explicitCoupon: string = 'pizza12'

// void type
let selectedTopping: string = 'pepperoni'
// impure function
function selectTopping(topping: string): void {
  selectedTopping = topping
}

selectTopping('bacon')

console.log(selectedTopping)


// // 
// // never type

// function orderError(error: string): never {
//   throw new Error(error);
//   // never going to return a value
// }

// orderError('something went wrong')

// 
// null type
let coupon2: string | null = 'pizza15'

function removeCoupon(): void {
  coupon2 = null;

}

console.log(coupon2)

removeCoupon()
console.log(coupon2);

// union type
let pizzaSize: string = 'small'

function selectSize(size: 'small' | 'medium' | 'large'): void{
  pizzaSize = size;
}

selectSize('large')

console.log(`pizza size: ${pizzaSize}`)

// 
// functions

function sumOrder(price: number, quantity: number): number {
  return price * quantity;

}

let sumOrder1 = (price: number, quantity: number): number => {
  return price * quantity;

}

let sumOrder2: (price: number, quantity: number) => number;

// sumOrder2 = (price: number, quantity: number): number => {
//   return price * quantity;
// };

sumOrder2 = (x, y) => x * y;

const sum = sumOrder(25, 5)

console.log(`Total sum: ${sum}`);
