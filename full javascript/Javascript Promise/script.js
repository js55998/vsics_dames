//!Asynchronous Call Back Function

//!True Every Time
// const doSomething = (x) => {
//   console.log("Function is Start....");

//   setTimeout(() => {
//     const skills = ["HTML", "CSS", "JS"];
//     x("Error:It Did not Go Well", skills);//!set error true every time
//   }, 5000);

//   console.log("Function is End....");
// };
// const callback = (err, result) => {
//   if (err) {return console.log(err);}
//   return console.log(result);
// };
// doSomething(callback)



//!false Every time

// const doSomething = (x) => {
//   console.log("Function is Start....");

//   setTimeout(() => {
//     const skills = ["HTML", "CSS", "JS"];
//     x(false, skills);//!set error false every time
//   }, 3000);

//   console.log("Function is End....");
// };
// const callback = (err, result) => {
//   if (err) {return console.log(err);}
//   return console.log(result);
// };
// doSomething(callback)







//  //!Synchronous Call Back Function
//  console.log('START');
//  console.time();
//  const roll = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  roll.forEach(r => {
//      console.log(r)
//  })
//  console.timeEnd();
//  console.log('END');








// //!this is a Parameterized CallBack Function where we pass a function as a parameter to another function  and then we call the function inside the function and then we call the function outside the function and then we call the function inside the function and so on.
// function Display(a) {// slow server
//     console.log(a);
// }
// function Calculation(Value, CallBack) {//fast server
//     CallBack(Value);
// }
// Calculation(10, Display);







// // function Main(x, y, callback) {
// //     var z = x + y;
// //     callback(z);
// // }

// // Main(10, 12, function View(a) {
// //     console.log(a);
// // });

// // Main(100, 102, function (a) {
// //     console.log(a);
// // });

// // Main(30, 20, a => { console.log(a); });


// //TODO:Synchronous CallBack:It waits for the function to complete its execution and then it executes the next function.
// console.log('START');
// Show = () => {
//     console.log('I am Show Function');
// }
// hi = (CallBack) => {
//     CallBack();
// }
// hi(Show);
// console.log('END');

// // //TODO:Asynchronous CallBack:It executes the next function after the function completes its execution.it never waits for the each operation to complete.rather it executes the next function after the each operation.
// console.log('START');
// setTimeout(function View() {
//     console.log('I am View Function');
// }, 5000)
// console.log('END');





