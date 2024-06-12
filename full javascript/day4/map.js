//The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

const arr = [1, 4, 9, 16];
const map_result = arr.map((x) => x * 2);
console.log(map_result);

//Mapping an array of numbers to an array of square roots
const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));
console.log("roots:", roots);

//Using map to reformat objects in an array
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];
const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
console.log(reformattedArray);
console.log(kvArray);

//Using parseInt() with map()
console.log(["1", "2", "3"].map(parseInt));

//   While one might expect [1, 2, 3], the actual result is [1, NaN, NaN].

//   parseInt is often used with one argument, but takes two. The first is an expression and the second is the radix to the callback function, Array.prototype.map passes 3 arguments: the element, the index, and the array. The third argument is ignored by parseInt — but not the second one! This is the source of possible confusion.

/* first iteration  (index is 0): */ parseInt("1", 0); // 1
/* second iteration (index is 1): */ parseInt("2", 1); // NaN
/* third iteration  (index is 2): */ parseInt("3", 2); // NaN

console.log(["1", "2", "3"].map((str) => parseInt(str, 10)))
console.log(["1", "2", "3"].map(Number))
console.log(["1.1", "2.2e2", "3e300"].map(Number))
console.log(["1.1", "2.2e2", "3e300"].map((str) => parseInt(str, 10)))



//Mapped array contains undefined
const numbers2 = [1, 2, 3, 4];
const filteredNumbers = numbers2.map((num, index) => {
  if (index < 3) {
    return num;
  }
});








// index goes from 0, so the filterNumbers are 1,2,3 and undefined.
// filteredNumbers is [1, 2, 3, undefined]
// numbers is still [1, 2, 3, 4]


//Side-effectual mapping
// const cart = [5, 15, 25];
// let total = 0;
// const withTax = cart.map((cost) => {
//   total += cost;
//   return cost * 1.2;
// });
// console.log(withTax); 
// console.log(total); 


//Another Approach
// const cart = [5, 15, 25];
// const total = cart.reduce((acc, cost) => acc + cost, 0);
// const withTax = cart.map((cost) => cost * 1.2);

// console.log(withTax); 
// console.log(total); 


const products = [
    { name: "sports car" },
    { name: "laptop" },
    { name: "phone" },
  ];
  
//   products.map((product) => {
//     product.price = 100;
//   });
//console.log(products)


// products.forEach((product) => {
//     product.price = 100;
//   })
//console.log(products)

// const productsWithPrice = products.map((product) => {
//     return { ...product, price: 100 };
//   });
  
// console.log(productsWithPrice)



//Using the third argument of callbackFn
const numbers_2 = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const averaged = numbers_2
  .filter((num) => num > 0)
  .map((num, idx, arr) => {
    // Without the arr argument, there's no way to easily access the
    // intermediate array without saving it to a variable.
    const prev = arr[idx - 1];
    const next = arr[idx + 1];
    let count = 1;
    let total = num;
    if (prev !== undefined) {
      count++;
      total += prev;
    }
    if (next !== undefined) {
      count++;
      total += next;
    }
    const average = total / count;
    // Keep two decimal places
    return Math.round(average * 100) / 100;
  });
console.log(averaged); 


//Using map() on sparse arrays
console.log(
    [1, , 3].map((x, index) => {
      console.log(`Visit ${index}`);
      return x * 2;
    }),
  );


  //Calling map() on non-array objects
  const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
    3: 5, // ignored by map() since length is 3
  };
  console.log(Array.prototype.map.call(arrayLike, (x) => x ** 2));
  