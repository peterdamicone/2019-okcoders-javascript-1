// Week 1 homework 

// [1, 2, 3, 4] and go to only even [2, 4]
// or an array of objects:
// [{name: "zach", age: 4}, {name: "bob", age: 22}] and go to only aged greater than 10 [{name: "bob", age: 22}]

const exampleData1 = [1, 2, 3, 4]
    // instructions - use Filter to create a new array with only even numbers

const isEven = exampleData1.filter(e => e % 2 === 0)
console.log(isEven)