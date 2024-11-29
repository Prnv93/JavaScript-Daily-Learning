const word = 'Malayalam'

const checkPalindrome = inputWord => {
    const reversedWord = inputWord.split('').reverse().join('')
    const state = inputWord.toLowerCase()===reversedWord.toLowerCase()
    return new Promise((resolve, reject)=>{
        if(state) resolve({message: 'The string is a palindrome execute counting', execute:()=> debouncedFunction(inputWord) })
        else reject({message: 'The string is not a palindrome execute counting failed'})
    })
}

const countElements = inputWord=>{
    const map = new Map()
    const elementArray = inputWord.toLowerCase().split('')
    elementArray.forEach(element => {
        map.set(element, (map.get(element)||0)+1)
        });
        console.log(map)
    return map
}

const debounce = (func, delay) =>{
    let timeOut
    return (...args) =>{
        timeOut = setTimeout(()=>{
            func(...args)
        },delay)
    }
}

const debouncedFunction = debounce(countElements,5000)

checkPalindrome(word).then((result) => {
    console.log(`Success ${result.message}`)
    result.execute()
}).catch((message) => {
    console.log(`Failed ${message}`)
});



