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


const name = 'anurag pathak'
const email = 'anuragp@gmail.com'
console.log(`My name is ${name} amd my email is ${email}`)

console.log(name.charAt(2))
console.log(name.toUpperCase())
console.log(name.trim())
console.log(name.length)
console.log(name.replace('  ', ''))
console.log(name.includes('anurag'))
console.log(name.split(' ',1))