console.log('hello');
console.log("1" + 2) // 12
console.log(1 + "2") //12 
console.log("1" + 1 + 2) //122
console.log(1 + 2 + "2") //32
console.log(1 + 2 + "3" + 2)//332

console.log("1" - 2) // -1
console.log(1 - "2") // -1
console.log("1" - 2 - 3) // -4
console.log(1 - 2 - "3") // -4
console.log( 1 - 2 - "3" - 2)// -6

let a = true
console.log(a) // true
console.log(+true) // 1

let gameCounter = 10;
let y = gameCounter++;
console.log(gameCounter, y) // 11, 10
