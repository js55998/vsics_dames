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
const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum
}
console.log(sumArray(numbers))