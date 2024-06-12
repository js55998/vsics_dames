//The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

//Iterating own properties

const triangle = { a: 1, b: 2, c: 3 };

function ColoredTriangle() {
  this.color = "red";
}

ColoredTriangle.prototype = triangle;

const obj1 = new ColoredTriangle();

for (const prop in obj1) {
  if (Object.hasOwn(obj1, prop)) {
    console.log(`obj1.${prop} = ${obj1[prop]}`);
  }
}


//Concurrent modification

const obj2 = { a: 1, b: 2 };

for (const prop in obj2) {
  obj2.c = 3;
  console.log(`obj2.${prop} = ${obj2[prop]}`);
  obj2.d = 4;
}


// //Shadowed properties are only visited once:
// const proto = { a: 1 };
// const obj3 = { __proto__: proto, a: 2 };

// for (const prop in obj3) {
//   console.log(`obj3.${prop} = ${obj3[prop]}`);
// }

// // Logs nothing, because the first "a" property visited is non-enumerable.
// Object.defineProperty(obj3, "a", { enumerable: false });

// for (const prop in obj3) {
//   console.log(`obj3.${prop} = ${obj3[prop]}`);
// }

l


//!Deleting a property during iteration:
const obj5 = { a: 1, b: 2, c: 3 };

// Deleting a property before it is visited
for (const prop in obj5) {
  console.log(`obj5.${prop} = ${obj5[prop]}`);
  delete obj5.c;
}

const obj6 = { a: 1, b: 2, c: 3 };

// Deleting a property after it is visited
for (const prop in obj6) {
  console.log(`obj6.${prop} = ${obj6[prop]}`);
  delete obj6.a;
}


// //Enumerable properties added to the prototype during iteration:
// const proto = {};
// const obj7 = { __proto__: proto, a: 1, b: 2 };

// for (const prop in obj7) {
//   console.log(`obj7.${prop} = ${obj7[prop]}`);
//   proto.c = 3;
// }



//Changing the enumerability of a property during iteration:
const obj8 = { a: 1, b: 2, c: 3 };

for (const prop in obj8){
  console.log(`obj8.${prop} = ${obj8[prop]}`);
  Object.defineProperty(obj8, "c", { enumerable: false });
}
