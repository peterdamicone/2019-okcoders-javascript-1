const people = [{ name: "John Doe", age: 16 }, { name: "Thomas Calls", age: 19 }, { name: "Liam Smith", age: 20 }, { name: "Jessy Pinkman", age: 18 }, ];
// exersizes from https://www.freecodecamp.org/news/higher-order-functions-in-javascript-d9101f9cf528/
// Imagine writing a piece of code that accepts a list of people where you want to filter out the people that are equal or above the age of 18.

const under18 = people.filter(age => age.age <= 18);
console.log(under18);