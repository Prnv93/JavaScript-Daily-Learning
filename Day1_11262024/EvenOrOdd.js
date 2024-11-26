
const checkNumberIsEven = number =>{
    if(number%2===0)
        return true;
}

const numberToBeChecked=7;
if(checkNumberIsEven(numberToBeChecked))
    console.log(`The ${numberToBeChecked} is even` )
else console.log(`The number ${numberToBeChecked} is odd`)