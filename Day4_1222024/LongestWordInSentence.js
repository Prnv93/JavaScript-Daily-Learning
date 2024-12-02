const sentence = 'I am joining Cognizant in February'

const checkLongestWord = input =>{
    const wordArray = sentence.split(' ')
    const count=[]
    wordArray.forEach(word=>{
        count.push(word.length)
    })
    return ()=>{
        const indexOfLargest = count.indexOf(Math.max(...count))
        return wordArray.at(indexOfLargest)
    }
}

const largestWord = checkLongestWord(sentence)
console.log(largestWord())