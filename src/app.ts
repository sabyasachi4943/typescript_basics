console.log("Hey there the TypeScript!");

const pizzas = [{ name: 'Pepperoni', toppings: ['pepperoni'] }]

const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase())

console.log(mappedPizzas)

// const pizza = {
//   name: 'Blazing Inferno',
//   getName: function () {
//     console.log(this.name);
//   },
// }

// console.log(pizza.getName())


// default parameters

function multiply(a:number, b = 35) {
  return a * b;
}

console.log(multiply(5))
console.log(multiply(5, 25))

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
  name: 'Pepperoni',
  toppings: ['pepperoni']
}

// function order({ name, toppings }) {
//   console.log(name, toppings);
// }
function order({ name: pizzaName, toppings:pizzaToppings }) {
  // console.log(pizzaName, pizzaToppings);
  return { pizzaName, pizzaToppings}
}


order(pizza);

const { pizzaName } = order(pizza);
console.log(pizzaName)

// 
// Array destructure

const toppings = ['pepperoni', 'bacon', 'chilli']


const [first, second, third] = toppings; 
console.log(first, second, third);

function logToppings([first, second, third]: any) {
  console.log(first, second, third);
}

logToppings(toppings);