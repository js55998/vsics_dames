let space = ' '
let firstName = 'Debasish'
let lastName = 'Sahoo'
let country = 'India'
let city = 'Kolkata'
let language = 'JavaScript'
let job = 'teacher'
let age=100
// Concatenating using addition operator
let fullName = firstName + space + lastName 
console.log(fullName)


// concatenation, merging two string together.
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country // ES5
console.log(personInfoOne)

// Concatenation: Template Literals(Template Strings)
let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` 

//ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`


console.log(personInfoTwo)
console.log(personInfoThree)