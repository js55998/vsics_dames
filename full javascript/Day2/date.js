const now = new Date() // now is a Date Object
console.log(now)
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getTime())
console.log(now.getHours())
console.log(now.getMilliseconds())
console.log(now.getMinutes())
console.log(now.getSeconds())
console.log(now.toDateString())
console.log(now.toISOString())
console.log(now.toLocaleDateString())
console.log(now.toLocaleTimeString())

const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) 