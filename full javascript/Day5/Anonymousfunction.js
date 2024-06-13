//Anonymous Function
const anonymousFun =function(){
    console.log(
        'I am an anonymous function and my value is stored in anonymousFun'
      )
}
anonymousFun()

// Function expression
const square = function(n) {
    return n * n
}
console.log(square(2)) 

//Self Invoking Functions
let squaredNum = (function(n){return n*n})(10)
console.log(squaredNum)

//Arrow Function
//Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences.
//Arrow function uses arrow instead of the keyword function to declare a function. Let us see both function declaration and arrow function.

//old Function
function square2(n) {
  return n * n
}
console.log(square2(2))

//Arrow Function
const square3=(n)=>{
  return n * n
}
console.log(square3(2))

//Chapri Arrow
const square4 = n => n * n
console.log(square4(3))