// Primitive data type (Call by Value they do't share the refrence of memory)

// 7 type => string, number, boolean, null , undifine, symbols, BigInt

const myString = "Hello World" // typeOf string

const myNumber = 100

const isLogedIn = false //

const myEmail = undefined // undifine

const outSideTemp = null // typeOf object

const id = Symbol('123')

const anotherId = Symbol('123') // typeof symbol
console.log(id == anotherId)

const bigNumber = 12345678898n



// Refrence (Non primitive)
// Array, Objects, functions


const myArray = ["Shaktiman", "Nagraj", "Doga"] // typeOf object

const MyObject = { // type of object
    name : "Anurag",
    age : 23,
}

const myFuntion = function (){
    console.log("Hello world")
}

console.log(typeof myFuntion) // function