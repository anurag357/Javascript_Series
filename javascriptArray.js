// Array
const myArr = [1,2,3,4,5]
const myNewArr = new Array( 1,2,3,4)
const myHeros = ['shktiman', 'nagraj']
// const neArr = [1,2,3,4,5,6,7]
// const nnArr = neArr.join()
// console.log(typeof nnArr)

// console.log(myArr)
// console.log(myNewArr)
// console.log(myHeros)


// Array Methods

// myArr.push(6)
// myArr.pop()
// myArr.unshift(7)
// myArr.shift()

// console.log("A", myArr)

// const myArr2 = myArr.slice(1,3)
// console.log(myArr2)
// console.log("B", myArr)

// const myArr3 = myArr.splice(1,3)
// console.log(myArr3)
// console.log("C", myArr)

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "batman", "flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// const new_All_Array2 = marvel_heros.concat(dc_heros)
// console.log(new_All_Array2)

// const new_All_heros = [...marvel_heros, ...dc_heros]  // spread oprator
// console.log(new_All_heros)

// const another_Array = [1, 2, 3, [4, 5, 6], 7, [8, 8, 9, [1, 2, 3]]];
// const realArr = another_Array.flat(Infinity);
// console.log(realArr);

console.log(Array.isArray("Anurag"))
console.log(Array.from("Anurag"))
// console.log(Array.from({name: 'Anurag'})) 

const score = 100;
const score2 = 200;
const score3 = 300;
console.log(Array.of(score, score2, score3))