//The “for…of” Loop: Introduced in ECMAScript 6, the “for…of” loop provides an elegant way to iterate over iterable objects like arrays, strings, maps, and sets. It assigns the value of each element to a variable, simplifying the code compared to traditional “for” loops. 

const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
  console.log(num)
}

for (const num of numbers) {
  console.log(num * num)
}

let sum = 0
for (const num of numbers) {
  sum += num  
}
console.log(sum)

const arr = ['apple', 'banana', 'cherry'];

for (const item of arr) {
  console.log(item);
}

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

for (const tech of webTechs) {
  console.log(tech.toUpperCase())
}


for (const tech of webTechs) {
  console.log(tech[0]) 
}

let language = "JavaScript";

let text = "";
for (let x of language) {
  text += x + "<br>";
}

const countries = ['India', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr = []
for(const country of countries){
  newArr.push(country.toUpperCase())
}

console.log(newArr) 


const arr2 = [3, 5, 7];
arr2.txt = "hello";

for (const i in arr2) {
  console.log(i);
}


for (const i of arr2) {
  console.log(i);
}
//While for...in iterates over property names, for...of iterates over property values:\



//Iterating over an Array
const itr_arr = [10, 20, 30];

for (let value of itr_arr) {
  value += 1;
  console.log(value);
}

//Iterating over a string
const str = "JAVASCRIPT";

for (const value of str) {
  console.log(value);
}


//Iterating over a TypedArray
const tArr = new Uint8Array([0x00, 0xff]);

for (const value of tArr) {
  console.log(value);
}

//Iterating over a Map

const itr_map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

for (const entry of itr_map) {
  console.log(entry);
}

for (const [key, value] of itr_map) {

  console.log(`${key}:${value}`);
}

//Iterating over a Set

const itr_set = new Set([1, 1, 2, 2, 3, 3]);

for (const value of itr_set) {
  console.log(value);
}

//Iterating over the arguments object

function args_obj() {

  for (const value of arguments) {
    console.log(value);
  }

}

//args_obj(1,2,3)

//args_obj(100,3)

//args_obj("a",3,"b",4)

//args_obj({'name':"Debasish"})


// const articleParagraphs = document.querySelectorAll("article > p");
// for (const paragraph of articleParagraphs) {
//   paragraph.classList.add("artp");
// }

// const divParagraphs = document.querySelectorAll("div > p");
// for (const paragraph of divParagraphs) {
//   paragraph.classList.add("divp");
// }


//Iterating over a user-defined iterable
let iterable = {
  [Symbol.iterator]() {
    let i = 1;
    return {
      next() {
        if (i <= 3) {
          return { value: i++, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

for (const value of iterable) {
  console.log(value);
}


iterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

for (const value of iterable) {
  console.log(value);
}