var price3 = 300;
if(true){
    const price1 = 10;
    let price2 = 20;
    var price3 = 30;
}

// console.log(price1)
// console.log(price2)
// console.log(price3)

function addNumber(num){
    return num + 1
}
console.log(addNumber(5)) // function can access any whare fiel.


const addNumber2 = function(num){
    return num + 2
}

console.log(addNumber2(5)) // variable can't access before decrelaration.
