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




// const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
// const fruits = ['banana', 'orange', 'mango', 'lemon']
console.log("First Fruit or BaseIndex:",fruits[0])
console.log("Second Fruit:",fruits[1])
let lastIndex = fruits.length - 1
console.log('last Fruit:', lastIndex)
//How to Access All Items, Length,Access HTML,MONGODB
const webTechs = ['HTML','CSS','JavaScript','React',
'Redux','Node','MongoDB']
console.log(webTechs)        // all the array items
console.log(webTechs.length) // => to know the size of the array, which is 7
console.log(webTechs[0])     //  -> HTML
console.log(webTechs[6])     //  -> MongoDB












//Edit Array Element
//Change 1 =>10 & 2 =>
let number = [1, 2, 3, 4, 5]
console.log('number:', number)
number[0]=10;
number[1]=20;
console.log('number:', number)
//Array Constructor
const arr = Array() // creates an an empty array
console.log(arr)
const eightEmptyValues = Array(8) 
console.log(eightEmptyValues) // [empty x 8]
//Creating static values with fill
const eight_X_Values = Array(8).fill('X')
console.log('eight_X_Values:', eight_X_Values)


//Concatenating array using concat
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)
console.log(thirdList)
// const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
// const fruits = ['banana', 'orange', 'mango', 'lemon']
//!Getting index an element in arr array
console.log(numbers.indexOf(3.14)) //1
console.log(numbers.indexOf(9.81)) //2
console.log(numbers.indexOf(98.6)) //4
//!Getting index an element in arr array
console.log(fruits.indexOf('banana'))
console.log(fruits.indexOf('orange'))
console.log(fruits.indexOf('mango'))
//!Check for is Exist
let index = fruits.indexOf('Banana')
let msg=index === -1 ? 'Banana does not exist': 'Banana exist'
console.log('msg:', msg)

//!lastIndexof
let num = [1, 2, 3, 4, 5, 3, 1, 2]
console.log(num.lastIndexOf(2))
console.log(num.lastIndexOf(1))
console.log(num.lastIndexOf(3))
console.log(num.lastIndexOf(4))
console.log(num.lastIndexOf(8))
//!includes
console.log(num.includes(5))
console.log(num.includes(8))
console.log(num.includes(1))
console.log(num.includes(9))
//!Checking Array
num = [1, 2, 3, 4, 5]
console.log(Array.isArray(num))
x = 100
console.log(Array.isArray(x))
//Converting array to string
const names = ['Debasish', 'Mathias', 'Elias', 'Brook']
console.log(names.toString())
console.log(names.join())
console.log(names.join(''))
console.log(names.join(' '))
console.log(names.join(', '))
console.log(names.join('# '))

//Slice
number = [1,2,3,4,5]
console.log(number.slice())
console.log(number.slice(0))
console.log(number.slice(0, number.length)) 
console.log(number.slice(1,3))
number.splice()
console.log(number)
number.splice(0,2)
console.log(number)
number = [1, 2, 3, 4, 5, 6]
number.splice(3,2 , 7, 8,10)
console.log(number) 



console.log(number)
number.shift() 
console.log(number)

console.log(webTechs)
webTechs.sort()
console.log(webTechs)
webTechs.reverse() 
console.log(webTechs)


//Array of Array
const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
console.log(arrayOfArray[0][1]) 

//For Loop
for(let i = 0; i <= 5; i++){
  console.log(i)
}

for(let i = 5; i >= 0; i--){
  console.log(i)
}
for(let i = 0; i <= 5; i++){
  console.log(`${i} * ${i} = ${i * i}`)
}

const numb = [1, 2, 3, 4, 5]
for (const nmb of numb) {
  console.log(nmb)
}