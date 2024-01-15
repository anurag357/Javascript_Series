let numbers = 100;
let antherNumber = new Number(1000000.9999)
// console.log(numbers)
// console.log(antherNumber)

// console.log(antherNumber.toFixed(2))
// console.log(antherNumber.toPrecision(3))
// console.log(antherNumber.valueOf())
// console.log(antherNumber.toLocaleString('en-IN'))



// ++++++++++++++++++Maths+++++++++++++++++++++++++++
console.log(Math)
console.log(Math.abs(-4)) // abs method used to convert negative number to positive
console.log(Math.random())
console.log((Math.random() * 10) + 1)
console.log(Math.floor((Math.random() * 10) + 1))

const min = 10
const max = 20

Math.random() * (max - min +1)
console.log(Math.floor(Math.random() * (max - min + 1)) + min)