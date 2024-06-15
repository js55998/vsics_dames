// this function takes array as a parameter and sum up the numbers in the array
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
console.log(sumArrayValues(numbers));


//Unlimited number of parameters in regular function
function sumAllNums1() {
  console.log(typeof(arguments))
    console.log(arguments)
   }
   
sumAllNums1(1, 2, 3, 4)
sumAllNums1(1, 2)





function sumAllNums2() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
  }

  console.log(sumAllNums2(1, 2, 3, 4))
  console.log(sumAllNums2(10, 20, 13, 40, 10)) 
  console.log(sumAllNums2(15, 20,'a'))

