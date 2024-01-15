// Stack(Primitive data type) , Heap(Non primivite data type)

let myChanel = 'myYoutubeChanel';
let myValue = myChanel;
myValue = 'myanotherYoutubeChanel';

console.log(myChanel)
console.log(myValue)


// Heap
let userOne = {
    email :"Anurag@gmail.com",
    phone : 9119637140
}

let userTwo = userOne
userTwo.email = "pathak@gmail.com"
console.log(userOne)
console.log(userTwo)