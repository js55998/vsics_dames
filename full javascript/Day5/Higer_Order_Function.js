//Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.

// a callback function, the name of the function could be any name
const callback = (n) => {
    return n ** 2
}
// function that takes other function as a callback
function cube(callback, n) {
    return callback(n) * n
}
console.log(cube(callback, 3))









//--------------------------------------------------------//
//Returning function
const higherOrder = n => {
    const doSomething = m => {
      const doWhatEver = t => {
        return 2 * n + 3 * m + t
      }
      return doWhatEver
    }
    return doSomething
}
console.log(higherOrder(2)(3)(10))


//For instance the forEach method uses call back.
const numbers1 = [1, 2, 3, 4, 5]
const sumArray1 = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }

  
  arr.forEach(callback)
  return sum
}


console.log(sumArray1(numbers1))


//For instance the forEach method uses call back.
const numbers2= [1, 2, 3, 4]
​
const sumArray2 = arr => {
  let sum = 0
  arr.forEach(function(element) {
    sum += element
  })
  return sum

}
console.log(sumArray2(numbers2))


//Setting Interval using a setInterval function
//In JavaScript, we use setInterval higher order function to do some activity continuously with in some interval of time. The setInterval global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback will be always called in that interval of time.
function sayHello() {
  console.log('Hello')
}
setInterval(sayHello, 1000)

setTimeout(sayHello, 2000)