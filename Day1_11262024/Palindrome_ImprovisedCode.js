const checkPalindrome = inputString => {
    const reversedString = inputString.split('').reverse().join('')
    return inputString === reversedString ? true : false 
}

const inputString = 'learn'
console.log(checkPalindrome(inputString))