// split(): The split method splits a string at a specified place.
let string = 'World Of JavaScript'
console.log(string.split())     // ["World Of JavaScript"]
console.log(string.split(' '))  // ["Welcome to", "World", "Of", "JavaScript"]
let firstName = 'Debasish'
console.log(firstName.split())  // ["Debasish"]
console.log(firstName.split(''))  // ["A", "s", "a", "b", "e", "n", "e", "h"]
let countries = 'India, Sweden, Norway, Denmark, and Iceland'
console.log(countries.split(',')) // ["India", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', '))   //  ["India", "Sweden", "Norway", "Denmark", "and Iceland"]