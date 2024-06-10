//! Cant Modify the type of the Variable
let word = 'JavaScript'
word[0] = 'Y'
console.log('word:', word)//JavaScript



//! Comparison Between Value
let numOne = 3
let numTwo = '3'

console.log(numOne == numTwo) // true

let numThree = 3
let numFour = '3'

//! == is Checked only Value
console.log("numThree == numFour", numThree == numFour) //true
//! === is Checked only Value and Datatype
console.log("numThree === numFour", numThree === numFour) //false

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false
