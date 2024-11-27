const numArray = [2,5,7,55,99,102,99999]
let largestNumber=-Infinity
let smallestNumber=Infinity
numArray.forEach(
    number=>{
       if (number > largestNumber)largestNumber = number
       if(number < smallestNumber)smallestNumber=number
    }
)
console.log(`The largest number is ${largestNumber} and the smallest number is ${smallestNumber}`)