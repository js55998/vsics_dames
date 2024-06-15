//Destructing Arrays
const numbers = [1, 2, 3];
let [numOne, numTwo, numThree] = numbers;
console.log(numOne, numTwo, numThree);



const names = ["Debasish", "Brook", "David", "John"];
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;
console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);



const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants
console.log(e,pi,gravity, bodyTemp, boilingTemp)



const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  const [frontEnd, backEnd] = fullStack
  
  console.log(frontEnd)
  console.log(backEnd)


  const numbers2 = [1, 2, 3]
  let [numOne2, , numThree2] = numbers //2 is omitted

  console.log(numOne2, numThree2)


  const names2 = ['Debasish', 'Brook', 'David', 'John']
  let [, secondPerson1, , fourthPerson1] = names // first and third person is omitted

  console.log(secondPerson1, fourthPerson1)

