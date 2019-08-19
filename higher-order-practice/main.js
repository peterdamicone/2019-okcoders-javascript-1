// Week 1 homework 
// ####
// Map

// With map we have an array of any kind of element, and we want to modify each element in the array in some way.

// For example we can add to each element of a number array
//     [1, 2, 3, 4] and go to each number + 1[2, 3, 4, 5]
// or go from an array of objects[{ name: "zach", age: 4 }, { name: "bob", age: 22 }]
// and pull out one of the properties["zach", "bob"]

const exampleData1 = [1, 2, 3, 4]
    // instructions - use Filter to create a new array with only even numbers

const isEven = exampleData1.filter(e => e % 2 === 0)
console.log(isEven)

objectArray = [{ name: "zach", age: 4 }, { name: "bob", age: 22 }]
const onlyNames = objectArray.map(e => e.name)
console.log(onlyNames)

const plus1 = exampleData1.map(e => e + 1)
console.log(plus1)