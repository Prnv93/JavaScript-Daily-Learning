// Without using in-built methods
const reversedString = inputString => {
    let revString =''
    for(let i=inputString.length-1;i>=0;i--){
        revString+=inputString[i]
    }
    return revString
}
console.log(reversedString('Learn'))
//Using in-built methods 
const reverseString = input => input.split('').reverse().join('')
console.log(reverseString('Learn'))