let randomNum = Math.random()         // generates 0 to 0.999
console.log('randomNum:', randomNum)
let numBtnZeroAndTen = randomNum * 11
console.log('numBtnZeroAndTen:', numBtnZeroAndTen) // this gives: min 0 and max 10.99

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // this gives between 0 and 10
