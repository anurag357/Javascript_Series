const myNums = [1,2,3,4,5,6,7,8,9,10];

const newMyNums = [] ;
myNums.forEach((num)=>{
    if(num>4){
        newMyNums.push(num)
    }
})
console.log(newMyNums)

const newMyNums2 = myNums.filter((num)=> {
    return num > 4
})
console.log(newMyNums2)


const myNums2 = [1,2,3,4,5,6,7,8,9,10]
const initialVal = 0;
const total = myNums2.reduce((acc, curr)=> (acc + curr), initialVal)
const total2 = myNums2.reduce(function(acc, curr){ return (acc + curr)},initialVal)
console.log(total, total2);


const shopingCart = [
    {
        itemName: 'Pillow',
        price: 250,
    },

    {
        itemName: "BedSheet",
        price: 500,
    },

    {
        itemName: "Blankit",
        price: 1000,
    }
]

const sumOfItem = shopingCart.reduce((acc, item) => (acc + item.price),initialVal)
console.log(sumOfItem)