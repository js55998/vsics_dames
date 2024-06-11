// syntax
const arr1 = Array()
console.log(arr1)
// or
const arr2 = new Array()
console.log(arr2)
// or
const arr3 = []
console.log(arr3)



const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
const fruits = ['banana', 'orange', 'mango', 'lemon']
console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)
console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

//Array can have items of different data types
const arr4 = ['Debasish',250,true,
    { country: 'India', city: 'Kolkata' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
]
console.log(arr4)




//SPLIT()
let js = 'JavaScript'
const charsInJavaScript = js.split('')
console.log(charsInJavaScript)

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')
console.log(companies)

let txt =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')
console.log(words)


console.log("First Fruit:",fruits[0])
console.log("Second Fruit:",fruits[1])

let lastIndex = fruits.length - 1
console.log('last Fruit:', lastIndex)

const webTechs = ['HTML','CSS','JavaScript','React',
'Redux','Node','MongoDB'] 


