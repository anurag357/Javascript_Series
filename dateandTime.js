// Date
const myDate = new Date()
console.log(myDate.toDateString())
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toTimeString())

const myCreateddate = new Date(2023, 0, 24)
console.log(myCreateddate.toLocaleString())



let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())

let newdate2 = newDate.toLocaleString('default', {
    weekday :"long",
    weekday:"narrow",
    weekday:"short"
})

console.log(newdate2)