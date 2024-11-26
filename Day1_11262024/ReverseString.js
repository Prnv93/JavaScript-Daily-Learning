const str = 'Learn'
let outputStr

const reverseString = inputString => {
    let outputArray=[]
    let charArray = inputString.toLowerCase().split('')
    let i = charArray.length-1
    do{
        outputArray.push(charArray[i])
        i--
    }while(i>=0)
    return outputArray.join('');
}

console.log(reverseString(str))