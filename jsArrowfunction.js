//This keywords refer to the current context object value.

const user = {
    username: "Anurag",
    price: 100,
    welcomeMessage : function(){
        console.log(`${this.username}, welcoome to google.com`)
    }
}

user.welcomeMessage()
user.username = "A k Pathak"
user.welcomeMessage()

console.log(this)


// function userName(){
//     const user = "Anurag Pathak",
//     console.log(this.user)
// }

// const userName = function(){
//     let user = "akp"
//     console.log(this.user)
// }

const userName = () => {
        let user = "akp"
        console.log(this.user)
    }
userName()

const number = (num1, num2) => (num1 + num2)
console.log(number(2,3))

const number2 = (num1, num2) => {
    return num1 + num2
}

console.log(number2(3,4))

//IIFE imideatly inviking functin used to remove the polution of global context variables

// (function addDataBase(){                   // older javascript not used iife function
//     console.log('Database connnected');
// })();

// (() => {
//     console.log("Databse connected")
// });

//Javascript exicution

let val1 = 10;
let val2 = 20;

function addVal(num1,num2){
    return totol = num1 + num2;
}
const result = addVal(val1, val2)
const result2 = addVal(10,5)

// falsy value => NaN, false, 0, -0, BigInt 0n, null, undifine,"",
// Truthy Value => True, "0", "false", " ", [], {}, function(){}


// array check empty or not 
// if(userName.length === 0){
//     console.log("Array is empty")
// }


// object check is empty or not 
// if(Object.keys(userName).length === 0){
//     console.log("object is empty")
// }

//Nullish operator (??): null, undefine

// let val;
// val = 5 ?? 10;
// val = null ?? 10;
// val = undefined ?? function(){};
// console.log(val)

// Alt  + Shift + upArrow or DownArrow

const myArr = [1,2,3,4,5]
for (const iterator of myArr) {
    console.log(`${iterator}`)
}

const map = new Map()
map.set("In", "India")
map.set("Fr", "France")
map.set("USA", "United State of America")
map.set("In", "India")
// console.log(map)
for (const [key, val] of map) {
    // console.log(`${key} :- ${val}`)
}

// const myObj = {
//     js: "javscript",
//     R: "React",
//     ROR: "Ruby Or Rails"
// }

// for (const key in myObj) {
//     console.log(`${key} :- ${myObj[key]}`)
// }

const myCoding = [
    {
        languagesName: "Javascript",
        languagesFileName: "js"
    },
    {
        languagesName: "Java",
        languagesFileName: "java"
    },
    {
        languagesName: "HTML",
        languagesFileName: "html"
    },
    {
        languagesName: "Case Cading StyleSheet",
        languagesFileName: "css"
    }
]

myCoding.forEach((item ,index)=> {
    console.log(`${item.languagesName} and extension Name ${item.languagesFileName}`)
})