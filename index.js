// Task-1 Destructuring
// 1
// let costs = [55.60, 87.00, 62.50, 44.29];

// let [a,,,b] = costs;
// console.log(a,b);

// let [first, second] = costs;
// console.log(first,second);


// 2
// const movie1 = {
//     title: "Harry Potter and the Philosophers Stone",
//     director: "Chris Columbus",
//     year: 2001,
// };

// const movie2 = {
//     genre: "Fantasy adventure family drama",
//     composer: "John Williams",
// };

// let fullinformation = {...movie1, ...movie2};
// console.log(fullinformation);







// Task-2  Rest and spread 
// Task - 1
// 1
// const ingredients = ["flour", "water", "salt"];
// const extraIngredients = ["potato", "onion"];

// const allIngredients = [ingredients, ...extraIngredients];
// console.log(allIngredients);

// 2
// const user = {
//     name: "Alice",
//     age: 19,
//     tel: +998456522323,
// };

// const newObject = {
//     ...user,
//     isActive: true,
//     lastLogin: new Date(), 
// };

// console.log(newObject);


// 3
// const user =  {
//     firstname: "John",
//     lastname: "Mark",
//     age: 30,
// };

// const userr = {
//     ...user,
//     nationality: "german",
//     sex: "male",
// };

// console.log(userr);




// Task - 5  getComputedStyle

// const text = document.getElementById("text");

// window.getComputedStyle(text);
// console.log(window.getComputedStyle(text));





// Task - 6 Web storage 
// localStorage
let key = "firstname";
let value = "Jek"
localStorage(key, value);