const word = 'poop'

const countElements = input => {
    const elementMap = new Map()
    const letterArray = input.split('')
    letterArray.forEach(letter => {
        elementMap.set(letter,(elementMap.get(letter)||0)+1)
    });
    
    return () =>{
        const itr = elementMap.values()
        for(let i=0;i<elementMap.size;i++){
            if(itr.next().value>1) return false
        }
        return true
    }
}

const isUnique = countElements(word)
console.log(isUnique())