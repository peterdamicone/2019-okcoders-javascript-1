const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// CH5E1 Flattening
// Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
let arrays = [
    [1, 2, 3],
    [4, 5],
    [6]
];

const flaten = arrays.reduce(0, 0, 0, arrays);
console.log(flaten);
const flaten = arrays.reduce(arrays.concat(arrays[0], arrays[1], arrays[2]));
console.log(arrays.reduce((flat, current) => flat.concat(current), []));
console.log(arrays.reduce((flat, current) => flat.concat(current), []));