const numberArray = [2,5,7,5,99,2,99]


const countingElements = array => {
    const countMap = new Map()
    array.forEach(number =>{
        countMap.set(number, (countMap.get(number)||0)+1)
    })
    console.log(countMap)
    return countMap
}

const debounce = (func , delay) =>{
    let timeOut
    return (...args)=>{
        clearTimeout(timeOut)  //lclear any existing timeout 
        timeOut = setTimeout(()=>{
            func(...args)} , delay) // set new timeout 
    }
}

const debouncedCounting = debounce(countingElements,3000)
console.log(debouncedCounting(numberArray))

