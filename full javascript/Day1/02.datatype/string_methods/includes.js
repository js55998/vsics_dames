// includes(): It takes a substring argument and it check if substring argument exists in the string. includes() returns a boolean. It checks if a substring exist in a string and it returns true if it exists and false if it doesn't exist.
let string = 'World Of JavaScript'
console.log(string.includes('Wo'))     // true
console.log(string.includes('of'))     // false
console.log(string.includes('Script'))     // true
console.log(string.includes('script'))     // false
console.log(string.includes('java'))     // false
console.log(string.includes('Java'))     // true

let country = 'India'
console.log(country.includes('In')) // false
console.log(country.includes('da')) // true
console.log(country.includes('Kol')) // true
console.log(country.includes('Kata')) // false