// singleton  create object like this : object.create()
const mysys = Symbol("key1")
const user =  {
    name : "Anurag Pathak",
    email : "Anurag@gmail.com",
    [mysys] : "keyes",
    isLogedin : false,
}

console.log(user.name)
console.log(user["name"])
console.log(user[mysys])

user.greeting = function(){
    console.log("Hello greeting!!")
}
console.log(user.greeting())

user.greeting2 = function(){
    console.log(`My Name is ${this.name}`)
}
console.log(user.greeting2())

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}

const obj3 = {...obj1, ...obj2}
console.log(obj3)

const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4)

const objKeys = Object.keys(obj1)
const objval = Object.values(obj1)
const objEnties = Object.entries(obj2)
console.log(objKeys)
console.log(objval)
console.log(objEnties)

//Destructure
const user2 = {
    name:"anurag",
    myRoleIs: "Software Engineer",
    isLogedin: false,
}

const {myRoleIs:role} = user2;
console.log(role)

//IIFE : Imideatly invoking function expresion
// (function fullName(){
//     console.log("Anurag Pathak")
// })();

// (() => {
//     console.log("Pathak Anurag")
// })();


