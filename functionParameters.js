function addNumber(num1, num2){ //parameters
    return num1 + num2;
    // console.log("totals") // can't print ofter return
}
let result = addNumber(2,3) // arguments
console.log(result)


function loginUser(userName){
    if(!userName){
        console.log("Please enter name")
        return
    }
    return `${userName} just loogedIn.`
}
let getResult = loginUser("Anurag pathak")
console.log(getResult)

const user = {
    name: "Anurag",
    email: "anurag@gmail.com",
    phone: 9119637140,
}

function handleObject(anyObj){
    return `My Name is ${anyObj.name} and email id ${anyObj.email}`
}
let hObj = handleObject(user)
console.log(hObj)

const userArr = [100, 200, 300, 400 ,500]
function handleArray(getArr){
    return getArr[2]
}
console.log(handleArray(userArr))