const countingUsingClosure =()=>{
    let count =0

    return ()=>{
        count++
        console.log(`The count is ${count}`)
    }
}

const counter = countingUsingClosure()
counter()
