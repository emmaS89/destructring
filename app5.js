// Destructuring

// Example 1

// What does the following code return/print?

// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); // ?
// console.log(yearNeptuneDiscovered); // ?

// Solution 1

let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

// ***************************************************************

// Example 2

// Object Destructuring 2
// What does the following code return/print?

// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };

// let {numPlanets, ...discoveryYears} = planetFacts;

// console.log(discoveryYears); // ?


// Solution 2

let planetFacts2 = {
  numPlanets2: 8,
  yearNeptuneDiscovered2: 1846,
  yearMarsDiscovered2: 1659
};

// ...discoveryYears rest operator => so, it refers to last item(override)
let {numPlanets2, ...discoveryYears2} = planetFacts2;

console.log(discoveryYears2); // 1659

// *****************************************************************

// Example 3

// Object Destructuring 3
// What does the following code return/print?

// function getUserData({firstName, favoriteColor="green"}){
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }

// getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
// getUserData({firstName: "Melissa"}) // ?
// getUserData({}) // ?


// Solution 3
function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

console.log(getUserData({firstName: "Alejandro", favoriteColor: "purple"}) )
// Your name is Alejandro and you like purple
console.log(getUserData({firstName: "Melissa"})) 
// Your name is Melissa and you like green
console.log(getUserData({})) 
// Your name is undefined and you like green

// *********************************************

// Example 4

// What does the following code return/print?

// let [first, second, third] = ["Maya", "Marisa", "Chi"];

// console.log(first); // ?
// console.log(second); // ?
// console.log(third); // ?

// Solution 4

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi

// ************************************************************

// Example 5

// What does the following code return/print?

// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   "Raindrops on roses",
//   "whiskers on kittens",
//   "Bright copper kettles",
//   "warm woolen mittens",
//   "Brown paper packages tied up with strings"
// ]

// console.log(raindrops); // ?
// console.log(whiskers); // ?
// console.log(aFewOfMyFavoriteThings); // ?


// Solution 5

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

console.log(raindrops); // Raindrops on roses
console.log(whiskers); // whiskers on kittens
console.log(aFewOfMyFavoriteThings); 
// (3) ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

// **********************************************************************

// Example 6

// What does the following code return/print?

// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]]

// console.log(numbers) // ?


// Solution 6
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]
console.log(numbers) // [10,30,20]


// ********************************************

// Example 7

// ES5 Assigning Variables to Object Properties
// var obj = {
//   numbers: {
//     a: 1,
//     b: 2
//   }
// };

// var a = obj.numbers.a;
// var b = obj.numbers.b;

// ES2015 Object Destructuring
// /* Write an ES2015 Version */


// Solution 7
const obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

const {a,b} = obj.numbers

// *************************************************

// Example 8

// ES5 Array Swap
// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;
// ES2015 One-Line Array Swap with Destructuring
/* Write an ES2015 Version */

// Solution 8
// with Destructring

let arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]]
console.log(arr[0]) // 2
console.log(arr[1]) // 1

console.log('arr[0] :', arr[0], 'arr[1] :', arr[1])     // arr[0] : 2 arr[1] : 1


// **************************************************

// Example 9

// raceResults()
// Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest.

// first: the first element in the array
// second: the second element in the array
// third: the third element in the array
// rest: all other elements in the array
// Write a one line function to make this work using
// An arrow function
// Destructuring
// ‘Enhanced’ object assignment (same key/value shortcut)
// raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/

// Solution 9

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})

console.log(raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])) 
// {first: "Tom", second: "Margaret", third: "Allison", rest: Array(2)}
// {first: "Tom", second: "Margaret", third: "Allison", rest: ["David", "Pierre"]}

