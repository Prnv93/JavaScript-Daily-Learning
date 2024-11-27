const numberArray = [2,5,7,5,99,2,99]
const countMap = new Map()

numberArray.forEach(number =>{
    countMap.set(number, (countMap.get(number)||0)+1)
})

console.log(countMap)