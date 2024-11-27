const numberArray = [2,5,7,5,99,2,99]
const countMap = new Map()

numberArray.forEach(number=>{
    let count =0
    if(!countMap.has(number)){
        for(let i=numberArray.indexOf(number);i<numberArray.length;i++){
            if(numberArray[i]===number) count++
        }
        countMap.set(number,count)
    }
})
console.log(countMap)