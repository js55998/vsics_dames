//The forEach() method of Array instances executes a provided function once for each array element.

// forEach() expects a synchronous function — it does not wait for promises. Make sure you are aware of the implications while using promises (or async functions) as forEach callbacks.

const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element));




const ratings = [5, 4, 5];
let sum = 0;
const sumFunction = async (a, b) => a + b;
ratings.forEach(async (rating) => {
  sum = await sumFunction(sum, rating);
});
console.log(sum);





//Converting a for loop to forEach
const items = ["item1", "item2", "item3"];
const copyItems1 = [];
const copyItems2 = [];
// before
for (let i = 0; i < items.length; i++) {
  copyItems1.push(items[i]);
}
// after
items.forEach((item) => {
  copyItems2.push(item);
});




//Printing the contents of an array
const logArrayElements = (element, index /*, array */) => {
  console.log(`a[${index}] = ${element}`);
};



// Notice that index 2 is skipped, since there is no item at
// that position in the array.
[2, 5, , 9].forEach(logArrayElements);

//Using thisArg
class Counter {
  constructor() {
    this.sum = 0;
    this.count = 0;
  }
  add(array) {
    // Only function expressions have their own this bindings.
    array.forEach(function countEntry(entry) {
      this.sum += entry;
      ++this.count;
    }, this);
  }
}

const obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count);
console.log(obj.sum);

//An object copy function
const copy = (obj) => {
  const copy = Object.create(Object.getPrototypeOf(obj));
  const propNames = Object.getOwnPropertyNames(obj);
  propNames.forEach((name) => {
    const desc = Object.getOwnPropertyDescriptor(obj, name);
    Object.defineProperty(copy, name, desc);
  });
  return copy;
};

const obj1 = { a: 1, b: 2 };
console.log("obj1:", obj1);
const obj2 = copy(obj1);
console.log("obj2:", obj2);

//Flatten an array
const flatten = (arr) => {
  const result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  });
  return result;
};

// Usage
const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
console.log(flatten(nested));

//Using the third argument of callbackFn
// first uses filter() to extract the positive values and then uses forEach() to log its neighbors.
const numbers = [3, -1, 1, 4, 1, 5];
numbers
  .filter((num) => num > 0)
  .forEach((num, idx, arr) => {
    // Without the arr argument, there's no way to easily access the
    // intermediate array without saving it to a variable.
    console.log(arr[idx - 1], num, arr[idx + 1]);
  });
// undefined 3 1
// 3 1 4
// 1 4 1
// 4 1 5
// 1 5 undefined


//Using forEach() on sparse arrays
const arraySparse = [1, 3, /* empty */, 7];
let numCallbackRuns = 0;

arraySparse.forEach((element) => {
  console.log({ element });
  numCallbackRuns++;
});

console.log({ numCallbackRuns });

//Calling forEach() on non-array objects
const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
    3: 5, // ignored by forEach() since length is 3
  };
  Array.prototype.forEach.call(arrayLike, (x) => console.log(x));
  // 2
  // 3
  // 4
  