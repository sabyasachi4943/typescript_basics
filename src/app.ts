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
let implicitCoupon = "pizza15";
let explicitCoupon: string = "pizza12";

// void type
let selectedTopping: string = "pepperoni";
// impure function
function selectTopping(topping: string): void {
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
let coupon2: string | null = "pizza15";

function removeCoupon(): void {
  coupon2 = null;
}

console.log(coupon2);

removeCoupon();
console.log(coupon2);

// union type
let pizzaSize: string = "small";

function selectSize(size: "small" | "medium" | "large"): void {
  pizzaSize = size;
}

selectSize("large");

console.log(`pizza size: ${pizzaSize}`);

//
// functions

function sumOrder(price: number, quantity: number): number {
  return price * quantity;
}

let sumOrder1 = (price: number, quantity: number): number => {
  return price * quantity;
};

let sumOrder2: (price: number, quantity: number) => number;

// sumOrder2 = (price: number, quantity: number): number => {
//   return price * quantity;
// };

sumOrder2 = (x, y) => x * y;

const sum = sumOrder2(25, 5);

console.log(`Total sum: ${sum}`);

//
// function with optional parameter

let sumOrder3: (price: number, quantity?: number) => number;

sumOrder3 = (x, y) => {
  if (y) {
    return x * y;
  }
  return x;
};

const sum3 = sumOrder3(25, 5);

console.log(`Total sum: ${sum3}`);

// way to add default parameter

sumOrder3 = (x, y = 1) => x * y;

const sum4 = sumOrder3(35);

console.log(`Total sum: ${sum4}`);

//
// object signature
let pizza2: { name: string; price: number; getName(): string } = {
  name: "Plain old Pepperoni",
  price: 20,
  getName() {
    return pizza2.name;
  },
};

console.log(pizza2.getName());

//
// Collections most specifically array type
// in array type the types are in front and outside of the third bracket
let sizes: number[];

sizes = [1, 2, 3];
// generic type
let toppings2: Array<string>;
toppings2 = ["pepperoni", "bacon", "chilli"];

//
// tuple type
// in tuple type the types are inside of the third bracket
let pizza3: [string, number, boolean];
pizza3 = ["pepperoni", 20, true];

//
// type alias
type Size = "small" | "medium" | "large";
type Callback = (size: Size) => void;

let pizzaSize2: Size = "small";

const selectSize2: Callback = (x) => {
  pizzaSize = x;
};

selectSize2("medium");

//
// type assertions
type Pizza3 = { name: string; toppings: number };
const pizza4: Pizza3 = { name: "Blazing Inferno", toppings: 5 };

const serialized = JSON.stringify(pizza4);

// function getNameFromJSON(obj: string) {
//   return (<Pizza3>JSON.parse(obj)).name;
// }

function getNameFromJSON(obj: string) {
  return (JSON.parse(obj) as Pizza3).name;
}
getNameFromJSON(serialized);

//
// enum type
enum Sizes {
  Small,
  Medium,
  Large,
}

enum Sizes {
  ExtraLarge = 3,
}

const selectedSize = 2;

console.log(Sizes.Large, Sizes[Sizes.Large]);

console.log(Sizes[selectedSize]);

//
// enum Sizes2 {
//   Small = 'small',
//   Medium = 'medium',
//   Large = 'large',

// }

// gives inline enum members
const enum Sizes2 {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

let selected: Sizes2 = Sizes2.Small;

function updateSize(size: Sizes2): void {
  selected = size;
}

updateSize(Sizes2.Medium);

console.log(selected);

//
// interfaces

// interface PizzaInterface {
//   name: string;
//   sizes: string[];
// }

// let pizza5: PizzaInterface;

// function createPizza(name: string, sizes: string[]): PizzaInterface{
//   return {
//     name,
//     sizes,
//   }
// }

// pizza5 = createPizza('pepperoni', ['small', 'medium']);

// console.log(pizza5)

//
// interfaces with functions
// interface PizzaInterface {
//   name: string;
//   sizes: string[];
//   getAvailableSizes(): string[];
// }

// let pizza5: PizzaInterface;

// // one way
// function createPizza(name: string, sizes: string[]): PizzaInterface {
//   return {
//     name,
//     sizes,
//     getAvailableSizes() {
//       return this.sizes;
//     },
//   };
// }

// another way
// function createPizza(name: string, sizes: string[]) {
//   return {
//     name,
//     sizes,
//     getAvailableSizes() {
//       return this.sizes;
//     },
//   } as PizzaInterface;
// }

// pizza5 = createPizza("pepperoni", ["small", "medium"]);

// console.log(pizza5);

//
// extending the interface

interface Sizes1 {
  sizes: string[];
}
interface PizzaInterface extends Sizes1 {
  name: string;
  // optional property
  toppings?: number;
  getAvailableSizes(): string[];
  [key: number]: string;
  // dictionary: {
  //   [key: string]: any;
  // }
}

let pizza5: PizzaInterface;

// one way
function createPizza(name: string, sizes: string[]): PizzaInterface {
  return {
    name,
    sizes,
    getAvailableSizes() {
      return this.sizes;
    },
  };
}

pizza5 = createPizza("pepperoni", ["small", "medium"]);

console.log(pizza5);
pizza5[1] = "xyz";
pizza5.toppings = 1;

//
// class es6 version
// old way
function Pizza(name: string) {
  this.name = name;
  this.toppings = [];
}

Pizza.prototype.addTopping = function addTopping(topping: string) {
  this.toppings.push(topping)

}

const pizza6 = new Pizza('Pepperoni')
pizza6.addTopping('pepperoni')

console.log(pizza6);
