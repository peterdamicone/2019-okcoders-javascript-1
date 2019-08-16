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

// forEach

// map
// sort
// reduce

// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

// forEach

companies.forEach(function(company) {
    console.log(company.name);
});
// filter

// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }

// }
// console.log(canDrink);
// let canDrink = ages.filter(function(age) {
//     if (age >= 21) {
//         return true;
//     }
// })

let canDrink = ages.filter(age => age >= 21);
console.log(canDrink);

// filter retail companies

// const retailCompanies = companies.filter(function(company) {
//     if (company.category === "Retail") {
//         return true;
//     }
// });

const retailCompanies = companies.filter(company => company.category === "Retail");
console.log(retailCompanies);

// get 80s company

const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start <= 1989);
console.log(eightiesCompanies);

// filter those that lasted more than 10 years
const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));

// map
// create new arrays from amything from current array

// create array of company names

// const companyNames = companies.map(function(company) {
//     return company.name;
// });
// console.log(companyNames);

const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end} ]`);
console.log(testMap);

// square root every age and multiply it by 2. Very cool how you can manipulate an array very cleanly.
// note, don't forget to not end your statements before your last map. I tried using ; after first .map statment and it broke it. :(

const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => 2 * age);

console.log(ageMap);