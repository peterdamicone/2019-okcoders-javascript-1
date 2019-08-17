// In class work 8/17/2019
const example = [
    [4, 7],
    [6, 2], 1
];
const evenNumber = example.filter(e => e % 2 === 0)
console.log(evenNumber)
const isThereAnEvenNumber = example.reduce((p, c) => p + c, 0)

console.log(isThereAnEvenNumber);

// map takes in two perameters. Collection (data structure).
// function.map(col:array, callbackfn: type function) what you get back is an array.
const combineAnArray = example.reduce((p, c) => p.concat(c), []);
console.log(combineAnArray);