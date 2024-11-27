const numberArray = [2,5,7,5,99,2,99]
let outputArray=[]

numberArray.forEach(number => {
    if(!outputArray.includes(number)){
        outputArray.push(number)
    }
})

console.log(outputArray)