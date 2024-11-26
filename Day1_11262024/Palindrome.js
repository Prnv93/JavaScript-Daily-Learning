const inputString = 'racecar'

const checkPalindrome = inputString => {
    const str = inputString.toLowerCase()
    let i=0, j=str.length-1
    while(i<j){
        if(str.charAt(i)!==str.charAt(j)){
            return false
        }    
        i++
        j--
    }
    return true
}

console.log(checkPalindrome(inputString))